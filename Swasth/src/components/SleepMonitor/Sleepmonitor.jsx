import React, { useState, useEffect } from 'react';
import './Sleepmonitor.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Howl } from 'howler';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

function App() {
  const [sleepTime, setSleepTime] = useState(localStorage.getItem('sleepTime') || '');
  const [wakeTime, setWakeTime] = useState(localStorage.getItem('wakeTime') || '');
  const [sleepRecords, setSleepRecords] = useState(JSON.parse(localStorage.getItem('sleepRecords')) || []);
  const [currentTab, setCurrentTab] = useState('sleep');

  // Sound setup
  const sound = new Howl({
    src: ['/notification.mp3'], // Ensure this path is correct
  });

  // Request Notification permission on mount
  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  // Set up bedtime notification
  useEffect(() => {
    if (sleepTime) {
      const now = new Date();
      const [sleepHour, sleepMinute] = sleepTime.split(':').map(Number);
      let bedtime = new Date();
      bedtime.setHours(sleepHour, sleepMinute, 0, 0);
      if (bedtime < now) {
        // If bedtime is earlier than now, set for next day
        bedtime.setDate(bedtime.getDate() + 1);
      }
      const timeout = bedtime.getTime() - now.getTime();

      const timer = setTimeout(() => {
        triggerBedtimeNotification();
      }, timeout);

      return () => clearTimeout(timer);
    }
  }, [sleepTime]);

  const triggerBedtimeNotification = () => {
    // Play sound
    sound.play();

    // Show notification
    if (Notification.permission === 'granted') {
      new Notification('Bed time', {
        body: 'It\'s time to go to bed!',
        icon: '/bedtime-icon.png', // Optional: Add an icon in public folder
      });
    }

    // Optionally, show a toast notification
    toast.info("It's Bed time!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleSleepSubmit = (e) => {
    e.preventDefault();
    if (sleepTime) {
      localStorage.setItem('sleepTime', sleepTime);
      setSleepTime(sleepTime);
      toast.success('Sleep time set successfully!');
    }
  };

  const handleWakeSubmit = (e) => {
    e.preventDefault();
    if (wakeTime) {
      localStorage.setItem('wakeTime', wakeTime);
      setWakeTime(wakeTime);
      toast.success('Wake-up time set successfully!');

      // Record sleep data
      const sleepDuration = calculateSleepDuration(sleepTime, wakeTime);
      const today = new Date().toLocaleDateString();
      const newRecord = { date: today, duration: sleepDuration };
      const updatedRecords = [...sleepRecords, newRecord];
      setSleepRecords(updatedRecords);
      localStorage.setItem('sleepRecords', JSON.stringify(updatedRecords));
    }
  };

  const calculateSleepDuration = (sleep, wake) => {
    const [sleepHour, sleepMinute] = sleep.split(':').map(Number);
    const [wakeHour, wakeMinute] = wake.split(':').map(Number);
    const sleepDate = new Date();
    sleepDate.setHours(sleepHour, sleepMinute, 0, 0);
    let wakeDate = new Date();
    wakeDate.setHours(wakeHour, wakeMinute, 0, 0);
    if (wakeDate <= sleepDate) {
      wakeDate.setDate(wakeDate.getDate() + 1);
    }
    const diffMs = wakeDate - sleepDate;
    const diffHrs = diffMs / (1000 * 60 * 60);
    return parseFloat(diffHrs.toFixed(2));
  };

  const renderSleepForm = () => (
    <form onSubmit={handleSleepSubmit}>
      <label>
        Set your Sleep Time:
        <input
          type="time"
          value={sleepTime}
          onChange={(e) => setSleepTime(e.target.value)}
          required
        />
      </label>
      <button type="submit">Set Sleep Time</button>
    </form>
  );

  const renderWakeForm = () => (
    <form onSubmit={handleWakeSubmit}>
      <label>
        Set your Wake-up Time:
        <input
          type="time"
          value={wakeTime}
          onChange={(e) => setWakeTime(e.target.value)}
          required
        />
      </label>
      <button type="submit">Set Wake-up Time</button>
    </form>
  );

  const renderSleepQualityChart = () => {
    // Mock sleep quality based on duration
    const data = sleepRecords.map(record => ({
      date: record.date,
      duration: record.duration,
      quality: record.duration >= 7 && record.duration <= 9 ? 100 : record.duration < 7 ? 60 : 80,
    }));

    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis yAxisId="left" domain={[0, 24]} label={{ value: 'Hours', angle: -90, position: 'insideLeft' }}/>
          <YAxis yAxisId="right" orientation="right" domain={[0, 100]} label={{ value: 'Quality', angle: 90, position: 'insideRight' }}/>
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="duration" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="quality" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sleep Monitoring</h1>
        <p>Understand the impact of your sleep</p>
        <p>
          Use Swasth's easy to track sleep tool that can help you to improve your quality of sleep, boost energy and improve your well-being.
        </p>
      </header>
      <div className="App-content">
        {!sleepTime && renderSleepForm()}
        {sleepTime && !wakeTime && renderWakeForm()}
        {sleepTime && wakeTime && (
          <>
            <div className="times">
              <p><strong>Sleep Time:</strong> {sleepTime}</p>
              <p><strong>Wake-up Time:</strong> {wakeTime}</p>
            </div>
            <h2>Sleep Quality & Health</h2>
            {sleepRecords.length > 0 ? renderSleepQualityChart() : <p>No sleep records to display.</p>}
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
