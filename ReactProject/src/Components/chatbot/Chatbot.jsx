import React, { useState, useRef, useEffect } from "react";
import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";
import "./Chatbot.css";

// Replace with your actual API key
const API_KEY = "AIzaSyBOAnfy-GB6HiZEBo7PMv0RxZjComJi44Q";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const chatboxRef = useRef(null);
  const inputInitHeight = useRef(null);

  // Arrays for specific restricted topics
  const greetings = ["hi", "hello", "hey", "hola"];
  const abusiveWords = ["badword1", "badword2", "badword3"]; // Add abusive words here
  const restrictedKeywords = ["rape", "incest", "child abuse", "animal abuse", "domestic violence", "hate speech", "hate crime", "terrorism", "racism", "sexism", "homophobia", "transphobia"];
  const sensitiveMedical = ["confidentiality", "HIPAA", "medical history", "patient record"];
  const traumaAbuse = ["trauma", "abuse", "PTSD", "mental health crisis"];
  const unprovenTreatments = ["miracle cure", "pseudoscience", "alternative treatment", "unproven therapy"];
  const graphicContent = ["graphic content", "disturbing", "violent imagery"];
  const biasedAdvice = ["biased advice", "unqualified opinion", "dangerous suggestion"];

  const createChatMessage = (message, className) => ({
    message,
    className,
  });

  // Function to handle sending the user's message
  const handleSendMessage = () => {
    if (!userMessage.trim()) return;

    const userChat = createChatMessage(userMessage.trim(), "outgoing");
    setMessages((prevMessages) => [...prevMessages, userChat]);

    setUserMessage(""); // Clear input field
    scrollToBottom(); // Ensure chatbox scrolls to bottom
    generateResponse(userChat.message);
  };

  // Function to generate a response from the chatbot or handle restricted topics
  const generateResponse = (message) => {
    const messageLower = message.toLowerCase();

    // Check for greetings
    if (greetings.some((greet) => messageLower.includes(greet))) {
      const botMessage = createChatMessage(
        "Hi, welcome to Swasth, how can I help you?",
        "incoming"
      );
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      return;
    }

    // Check for abusive language
    if (abusiveWords.some((word) => messageLower.includes(word))) {
      const botMessage = createChatMessage(
        "Please avoid using offensive language.",
        "incoming"
      );
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      return;
    }

    // Check for restricted keywords (violence-related)
    if (restrictedKeywords.some((keyword) => messageLower.includes(keyword))) {
      const botMessage = createChatMessage(
        "Your query contains sensitive topics. We encourage respectful and appropriate language.",
        "incoming"
      );
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      return;
    }

    // Check for personal or sensitive medical information
    if (sensitiveMedical.some((term) => messageLower.includes(term))) {
      const botMessage = createChatMessage(
        "For your safety and privacy, we do not handle personal medical information. Please consult a healthcare professional.",
        "incoming"
      );
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      return;
    }

    // Check for trauma or abuse-related queries
    if (traumaAbuse.some((term) => messageLower.includes(term))) {
      const botMessage = createChatMessage(
        "If you are experiencing trauma or abuse, please reach out to a trusted support system or a professional counselor.",
        "incoming"
      );
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      return;
    }

    // Check for unproven or pseudoscientific treatments
    if (unprovenTreatments.some((term) => messageLower.includes(term))) {
      const botMessage = createChatMessage(
        "Be cautious of unproven treatments. Please consult a qualified healthcare provider for evidence-based advice.",
        "incoming"
      );
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      return;
    }

    // Check for graphic or disturbing content
    if (graphicContent.some((term) => messageLower.includes(term))) {
      const botMessage = createChatMessage(
        "For the safety of our users, we do not discuss graphic or disturbing content.",
        "incoming"
      );
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      return;
    }

    // Check for unqualified or biased advice
    if (biasedAdvice.some((term) => messageLower.includes(term))) {
      const botMessage = createChatMessage(
        "We encourage you to seek qualified and unbiased advice from professionals for important decisions.",
        "incoming"
      );
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      return;
    }

    // If no restricted topics, proceed with API request
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: message,
              },
            ],
          },
        ],
      }),
    };

    fetch(API_URL, requestOptions)
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(`Server responded with ${res.status}: ${text}`);
          });
        }
        return res.json();
      })
      .then((data) => {
        if (data && Array.isArray(data.candidates) && data.candidates.length > 0) {
          const responseText = data.candidates[0]?.content?.parts?.[0]?.text;
          const limitedResponse = responseText
            ? responseText.split(" ").slice(0, 50).join(" ")
            : "No response";
          const botMessage = createChatMessage(limitedResponse, "incoming");
          setMessages((prevMessages) => [...prevMessages, botMessage]);
        } else {
          const botMessage = createChatMessage(
            "No response from server.",
            "incoming"
          );
          setMessages((prevMessages) => [...prevMessages, botMessage]);
        }
      })
      .catch((error) => {
        console.error("API error:", error);
        const errorMessage = createChatMessage(
          "Oops! Something went wrong. Please try again.",
          "incoming"
        );
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      })
      .finally(() => scrollToBottom());
  };

  const scrollToBottom = () => {
    chatboxRef.current?.scrollTo(0, chatboxRef.current.scrollHeight);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chatbot-wrapper">
      {!chatOpen && (
        <div className="chatbot-toggler" onClick={() => setChatOpen(true)}>
          <FaRobot className="chat-icon" />
        </div>
      )}

      {chatOpen && (
        <div className="chatbot-container">
          <div className="chat-header">
            <h3>Swasth Assistant</h3>
            <FaTimes className="close-btn" onClick={() => setChatOpen(false)} />
          </div>

          <ul className="chatbox" ref={chatboxRef}>
            {messages.map((msg, index) => (
              <li key={index} className={`chat ${msg.className}`}>
                {msg.className === "incoming" && <FaRobot className="bot-icon" />}
                <p>{msg.message}</p>
              </li>
            ))}
          </ul>

          <div className="chat-input">
            <textarea
              placeholder="Type your message..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{ height: inputInitHeight.current }}
            />
            <FaPaperPlane className="send-btn" onClick={handleSendMessage} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;


// import React, { useState, useRef, useEffect } from "react";
// import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";
// import "./Chatbot.css";

// // Replace with your actual API key
// const API_KEY = "AIzaSyDN1ZlKXKkVtM5NcrhxZoZ_D7AcG1sQ-0c";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [userMessage, setUserMessage] = useState("");
//   const [chatOpen, setChatOpen] = useState(false);
//   const chatboxRef = useRef(null);
//   const inputInitHeight = useRef(null);

//   // List of violence-related keywords to restrict
//   const violenceKeywords = ["kill", "fight", "weapon", "attack", "murder", "molest","madrchod", "bhosdike"];
//   const restrictedKeywords = ["rape", "incest", "child abuse", "animal abuse",
//     "domestic violence", "hate speech", "hate crime", "terrorism", 
//     "terrorism", "racism", "sexism", "homophobia", "transphobia"

//   ]


//   const createChatMessage = (message, className) => ({
//     message,
//     className,
//   });

//   // Function to handle sending the user's message
//   const handleSendMessage = () => {
//     // Prevent sending empty messages
//     if (!userMessage.trim()) return;

//     // Create and send user message to the chatbox
//     const userChat = createChatMessage(userMessage.trim(), "outgoing");
//     setMessages((prevMessages) => [...prevMessages, userChat]);

//     // Clear the input field after sending the message
//     setUserMessage("");
//     scrollToBottom(); // Ensure the chatbox scrolls to the bottom

//     // Process the user's message and generate a response
//     generateResponse(userChat.message);
//   };

//   // Function to generate a response from the chatbot or restrict based on violence-related queries
//   const generateResponse = (message) => {
//     const messageLower = message.toLowerCase();

//     // Check if the user's message contains any violence-related keywords
//     if (violenceKeywords.some((word) => messageLower.includes(word))) {
//       const botMessage = createChatMessage(
//         "We kindly ask that you avoid topics related to violence. Let's keep things peaceful.",
//         "incoming"
//       );
//       setMessages((prevMessages) => [...prevMessages, botMessage]);
//       return;
//     }

//     // If no violence-related keywords, proceed with the API request
//     const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
//     const requestOptions = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         contents: [
//           {
//             parts: [
//               {
//                 text: message,
//               },
//             ],
//           },
//         ],
//       }),
//     };

//     fetch(API_URL, requestOptions)
//       .then((res) => {
//         // Check for a successful response from the API
//         if (!res.ok) {
//           return res.text().then((text) => {
//             throw new Error(`Server responded with ${res.status}: ${text}`);
//           });
//         }
//         return res.json();
//       })
//       .then((data) => {
//         // Handle the response data and display it in the chatbox
//         if (data && Array.isArray(data.candidates) && data.candidates.length > 0) {
//           const responseText = data.candidates[0]?.content?.parts?.[0]?.text;
//           const limitedResponse = responseText
//             ? responseText.split(" ").slice(0, 50).join(" ")
//             : "No response";
//           const botMessage = createChatMessage(limitedResponse, "incoming");
//           setMessages((prevMessages) => [...prevMessages, botMessage]);
//         } else {
//           const botMessage = createChatMessage(
//             "No response from server.",
//             "incoming"
//           );
//           setMessages((prevMessages) => [...prevMessages, botMessage]);
//         }
//       })
//       .catch((error) => {
//         // Handle API errors and display an error message
//         console.error("API error:", error);
//         const errorMessage = createChatMessage(
//           "Oops! Something went wrong. Please try again.",
//           "incoming"
//         );
//         setMessages((prevMessages) => [...prevMessages, errorMessage]);
//       })
//       .finally(() => scrollToBottom());
//   };

//   // Function to automatically scroll the chatbox to the bottom when new messages are added
//   const scrollToBottom = () => {
//     chatboxRef.current?.scrollTo(0, chatboxRef.current.scrollHeight);
//   };

//   // Handle sending message on pressing 'Enter' (without Shift)
//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   useEffect(() => {
//     scrollToBottom(); // Scroll to bottom when messages update
//   }, [messages]);

//   return (
//     <div className="chatbot-wrapper">
//       {/* Chatbot toggler to open chat */}
//       {!chatOpen && (
//         <div className="chatbot-toggler" onClick={() => setChatOpen(true)}>
//           <FaRobot className="chat-icon" />
//         </div>
//       )}

//       {/* Chatbot container */}
//       {chatOpen && (
//         <div className="chatbot-container">
//           <div className="chat-header">
//             <h3>Swasth Assistant</h3>
//             <FaTimes className="close-btn" onClick={() => setChatOpen(false)} />
//           </div>

//           <ul className="chatbox" ref={chatboxRef}>
//             {messages.map((msg, index) => (
//               <li key={index} className={`chat ${msg.className}`}>
//                 {msg.className === "incoming" && <FaRobot className="bot-icon" />}
//                 <p>{msg.message}</p>
//               </li>
//             ))}
//           </ul>

//           <div className="chat-input">
//             <textarea
//               placeholder="Type your message..."
//               value={userMessage}
//               onChange={(e) => setUserMessage(e.target.value)}
//               onKeyDown={handleKeyDown}
//               style={{ height: inputInitHeight.current }}
//             />
//             <FaPaperPlane className="send-btn" onClick={handleSendMessage} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;


// import React, { useState, useRef, useEffect } from "react";
// import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";
// import "./Chatbot.css";

// // Replace with your actual API key
// const API_KEY = "AIzaSyDN1ZlKXKkVtM5NcrhxZoZ_D7AcG1sQ-0c";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [userMessage, setUserMessage] = useState("");
//   const [chatOpen, setChatOpen] = useState(false);
//   const chatboxRef = useRef(null);
//   const inputInitHeight = useRef(null);

//   const greetings = ["hi", "hello", "hey", "hola"];
//   const abusiveWords = ["badword1", "badword2", "badword3"]; // Add abusive words here
//   const healthKeywords = ["workout", "yoga", "nutrition", "diet", "exercise"];

//   const createChatMessage = (message, className) => ({
//     message,
//     className,
//   });

//   const handleSendMessage = () => {
//     if (!userMessage.trim()) return;

//     const userChat = createChatMessage(userMessage.trim(), "outgoing");
//     setMessages((prevMessages) => [...prevMessages, userChat]);

//     setUserMessage(""); // Clear input field
//     scrollToBottom(); // Ensure chatbox scrolls to bottom
//     generateResponse(userChat.message);
//   };

//   const generateResponse = (message) => {
//     const messageLower = message.toLowerCase();

//     // Check for greetings
//     if (greetings.some((greet) => messageLower.includes(greet))) {
//       const botMessage = createChatMessage(
//         "Hi, welcome to Swasth, how can I help you?",
//         "incoming"
//       );
//       setMessages((prevMessages) => [...prevMessages, botMessage]);
//       return;
//     }

//     // Check for abusive language
//     if (abusiveWords.some((word) => messageLower.includes(word))) {
//       const botMessage = createChatMessage(
//         "Please avoid using offensive language.",
//         "incoming"
//       );
//       setMessages((prevMessages) => [...prevMessages, botMessage]);
//       return;
//     }

//     // Check for health-related queries
//     if (healthKeywords.some((keyword) => messageLower.includes(keyword))) {
//       const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
//       const requestOptions = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           contents: [
//             {
//               parts: [
//                 {
//                   text: message,
//                 },
//               ],
//             },
//           ],
//         }),
//       };

//       fetch(API_URL, requestOptions)
//         .then((res) => {
//           if (!res.ok) {
//             return res.text().then((text) => {
//               throw new Error(`Server responded with ${res.status}: ${text}`);
//             });
//           }
//           return res.json();
//         })
//         .then((data) => {
//           if (data && Array.isArray(data.candidates) && data.candidates.length > 0) {
//             const responseText = data.candidates[0]?.content?.parts?.[0]?.text;
//             const limitedResponse = responseText
//               ? responseText.split(" ").slice(0, 50).join(" ")
//               : "No response";
//             const botMessage = createChatMessage(limitedResponse, "incoming");
//             setMessages((prevMessages) => [...prevMessages, botMessage]);
//           } else {
//             const botMessage = createChatMessage(
//               "No response from server.",
//               "incoming"
//             );
//             setMessages((prevMessages) => [...prevMessages, botMessage]);
//           }
//         })
//         .catch((error) => {
//           console.error("API error:", error);
//           const errorMessage = createChatMessage(
//             "Oops! Something went wrong. Please try again.",
//             "incoming"
//           );
//           setMessages((prevMessages) => [...prevMessages, errorMessage]);
//         })
//         .finally(() => scrollToBottom());
//     } else {
//       const botMessage = createChatMessage(
//         "Sorry, I can only assist with health-related queries like workout, yoga, and nutrition.",
//         "incoming"
//       );
//       setMessages((prevMessages) => [...prevMessages, botMessage]);
//     }
//   };

//   const scrollToBottom = () => {
//     chatboxRef.current?.scrollTo(0, chatboxRef.current.scrollHeight);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   return (
//     <div className="chatbot-wrapper">
//       {!chatOpen && (
//         <div className="chatbot-toggler" onClick={() => setChatOpen(true)}>
//           <FaRobot className="chat-icon" />
//         </div>
//       )}

//       {chatOpen && (
//         <div className="chatbot-container">
//           <div className="chat-header">
//             <h3>Swasth Assistant</h3>
//             <FaTimes className="close-btn" onClick={() => setChatOpen(false)} />
//           </div>

//           <ul className="chatbox" ref={chatboxRef}>
//             {messages.map((msg, index) => (
//               <li key={index} className={`chat ${msg.className}`}>
//                 {msg.className === "incoming" && <FaRobot className="bot-icon" />}
//                 <p>{msg.message}</p>
//               </li>
//             ))}
//           </ul>

//           <div className="chat-input">
//             <textarea
//               placeholder="Type your message..."
//               value={userMessage}
//               onChange={(e) => setUserMessage(e.target.value)}
//               onKeyDown={handleKeyDown}
//               style={{ height: inputInitHeight.current }}
//             />
//             <FaPaperPlane className="send-btn" onClick={handleSendMessage} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;


// import React, { useState, useRef, useEffect } from "react";
// import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";
// import "./Chatbot.css";

// // Replace with your actual API key
// const API_KEY = "AIzaSyDN1ZlKXKkVtM5NcrhxZoZ_D7AcG1sQ-0c";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [userMessage, setUserMessage] = useState("");
//   const [chatOpen, setChatOpen] = useState(false);
//   const chatboxRef = useRef(null);
//   const inputInitHeight = useRef(null);

//   const greetings = ["hi", "hello", "hey", "hola"];
//   const abusiveWords = ["badword1", "badword2", "badword3"]; // Add abusive words here

//   const createChatMessage = (message, className) => ({
//     message,
//     className,
//   });

//   // Function to handle sending the user's message
//   const handleSendMessage = () => {
//     if (!userMessage.trim()) return;

//     const userChat = createChatMessage(userMessage.trim(), "outgoing");
//     setMessages((prevMessages) => [...prevMessages, userChat]);

//     setUserMessage(""); // Clear input field
//     scrollToBottom(); // Ensure chatbox scrolls to bottom
//     generateResponse(userChat.message);
//   };

//   // Function to generate a response from the chatbot or handle abusive words/greetings
//   const generateResponse = (message) => {
//     const messageLower = message.toLowerCase();

//     // Check for greetings
//     if (greetings.some((greet) => messageLower.includes(greet))) {
//       const botMessage = createChatMessage(
//         "Hi, welcome to Swasth, how can I help you?",
//         "incoming"
//       );
//       setMessages((prevMessages) => [...prevMessages, botMessage]);
//       return;
//     }

//     // Check for abusive language
//     if (abusiveWords.some((word) => messageLower.includes(word))) {
//       const botMessage = createChatMessage(
//         "Please avoid using offensive language.",
//         "incoming"
//       );
//       setMessages((prevMessages) => [...prevMessages, botMessage]);
//       return;
//     }

//     // If no greetings or abusive language, proceed with API request
//     const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
//     const requestOptions = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         contents: [
//           {
//             parts: [
//               {
//                 text: message,
//               },
//             ],
//           },
//         ],
//       }),
//     };

//     fetch(API_URL, requestOptions)
//       .then((res) => {
//         if (!res.ok) {
//           return res.text().then((text) => {
//             throw new Error(`Server responded with ${res.status}: ${text}`);
//           });
//         }
//         return res.json();
//       })
//       .then((data) => {
//         if (data && Array.isArray(data.candidates) && data.candidates.length > 0) {
//           const responseText = data.candidates[0]?.content?.parts?.[0]?.text;
//           const limitedResponse = responseText
//             ? responseText.split(" ").slice(0, 50).join(" ")
//             : "No response";
//           const botMessage = createChatMessage(limitedResponse, "incoming");
//           setMessages((prevMessages) => [...prevMessages, botMessage]);
//         } else {
//           const botMessage = createChatMessage(
//             "No response from server.",
//             "incoming"
//           );
//           setMessages((prevMessages) => [...prevMessages, botMessage]);
//         }
//       })
//       .catch((error) => {
//         console.error("API error:", error);
//         const errorMessage = createChatMessage(
//           "Oops! Something went wrong. Please try again.",
//           "incoming"
//         );
//         setMessages((prevMessages) => [...prevMessages, errorMessage]);
//       })
//       .finally(() => scrollToBottom());
//   };

//   const scrollToBottom = () => {
//     chatboxRef.current?.scrollTo(0, chatboxRef.current.scrollHeight);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   return (
//     <div className="chatbot-wrapper">
//       {!chatOpen && (
//         <div className="chatbot-toggler" onClick={() => setChatOpen(true)}>
//           <FaRobot className="chat-icon" />
//         </div>
//       )}

//       {chatOpen && (
//         <div className="chatbot-container">
//           <div className="chat-header">
//             <h3>Swasth Assistant</h3>
//             <FaTimes className="close-btn" onClick={() => setChatOpen(false)} />
//           </div>

//           <ul className="chatbox" ref={chatboxRef}>
//             {messages.map((msg, index) => (
//               <li key={index} className={`chat ${msg.className}`}>
//                 {msg.className === "incoming" && <FaRobot className="bot-icon" />}
//                 <p>{msg.message}</p>
//               </li>
//             ))}
//           </ul>

//           <div className="chat-input">
//             <textarea
//               placeholder="Type your message..."
//               value={userMessage}
//               onChange={(e) => setUserMessage(e.target.value)}
//               onKeyDown={handleKeyDown}
//               style={{ height: inputInitHeight.current }}
//             />
//             <FaPaperPlane className="send-btn" onClick={handleSendMessage} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;


// import React, { useState, useRef, useEffect } from "react";
// import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";
// import "./Chatbot.css";

// // Replace with your actual API key
// const API_KEY = "AIzaSyDN1ZlKXKkVtM5NcrhxZoZ_D7AcG1sQ-0c";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [userMessage, setUserMessage] = useState("");
//   const [chatOpen, setChatOpen] = useState(false);
//   const chatboxRef = useRef(null);
//   const inputInitHeight = useRef(null);

//   const createChatMessage = (message, className) => ({
//     message,
//     className,
//   });

//   // Function to handle sending the user's message
//   const handleSendMessage = () => {
//     if (!userMessage.trim()) return;

//     const userChat = createChatMessage(userMessage.trim(), "outgoing");
//     setMessages((prevMessages) => [...prevMessages, userChat]);

//     setUserMessage(""); // Clear input field
//     scrollToBottom(); // Ensure chatbox scrolls to bottom
//     generateResponse(userChat.message);
//   };

//   // Function to generate a response from the chatbot using the external API
//   const generateResponse = (message) => {
//     const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
//     const requestOptions = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         contents: [
//           {
//             parts: [
//               {
//                 text: message,
//               },
//             ],
//           },
//         ],
//       }),
//     };

//     fetch(API_URL, requestOptions)
//       .then((res) => {
//         if (!res.ok) {
//           return res.text().then((text) => {
//             throw new Error(`Server responded with ${res.status}: ${text}`);
//           });
//         }
//         return res.json();
//       })
//       .then((data) => {
//         if (data && Array.isArray(data.candidates) && data.candidates.length > 0) {
//           const responseText = data.candidates[0]?.content?.parts?.[0]?.text;
//           const limitedResponse = responseText ? responseText.split(" ").slice(0, 50).join(" ") : "No response";
//           const botMessage = createChatMessage(limitedResponse, "incoming");
//           setMessages((prevMessages) => [...prevMessages, botMessage]);
//         } else {
//           const botMessage = createChatMessage("No response from server.", "incoming");
//           setMessages((prevMessages) => [...prevMessages, botMessage]);
//         }
//       })
//       .catch((error) => {
//         console.error("API error:", error);
//         const errorMessage = createChatMessage("Oops! Something went wrong. Please try again.", "incoming");
//         setMessages((prevMessages) => [...prevMessages, errorMessage]);
//       })
//       .finally(() => scrollToBottom());
//   };

//   const scrollToBottom = () => {
//     chatboxRef.current?.scrollTo(0, chatboxRef.current.scrollHeight);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   return (
//     <div className="chatbot-wrapper">
//       {!chatOpen && (
//         <div className="chatbot-toggler" onClick={() => setChatOpen(true)}>
//           <FaRobot className="chat-icon" />
//         </div>
//       )}

//       {chatOpen && (
//         <div className="chatbot-container">
//           <div className="chat-header">
//             <h3>Swasth Assistant</h3>
//             <FaTimes className="close-btn" onClick={() => setChatOpen(false)} />
//           </div>

//           <ul className="chatbox" ref={chatboxRef}>
//             {messages.map((msg, index) => (
//               <li key={index} className={`chat ${msg.className}`}>
//                 {msg.className === "incoming" && <FaRobot className="bot-icon" />}
//                 <p>{msg.message}</p>
//               </li>
//             ))}
//           </ul>

//           <div className="chat-input">
//             <textarea
//               placeholder="Type your message..."
//               value={userMessage}
//               onChange={(e) => setUserMessage(e.target.value)}
//               onKeyDown={handleKeyDown}
//               style={{ height: inputInitHeight.current }}
//             />
//             <FaPaperPlane className="send-btn" onClick={handleSendMessage} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;



// import React, { useState, useRef, useEffect } from "react";
// import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";
// import "./Chatbot.css";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [userMessage, setUserMessage] = useState("");
//   const [chatOpen, setChatOpen] = useState(false);
//   const chatboxRef = useRef(null);

//   const createChatMessage = (message, className) => {
//     return { message, className };
//   };

//   // Function to get responses based on user messages
//   const getResponse = (message) => {
//     const lowerCaseMessage = message.toLowerCase();

//     // Welcome message
//     if (lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hello")) {
//       return "Hi! Welcome to Swasth Assistant. How can I assist you today?";
//     }

//     // Farewell message
//     if (
//       lowerCaseMessage.includes("bye") ||
//       lowerCaseMessage.includes("goodbye")
//     ) {
//       return "Goodbye! Take care, and stay healthy. 😊";
//     }

//     // Warning for abusive words
//     const abusiveWords = [
//       "kuute",
//       "madrchod",
//       "bhosdike",
//       "bhsdk",
//       "motherfucker",
//       "idiot",
//       "stupid",
//       "fool",
//       "damn",
//       "asshole",
//       "jerk",
//       "chutiya",
//       "lund",
//       "gaali",
//       "saala",
//       "kamina",
//       "bastard",
//       "bitch",
//       "shit",
//       "fuck",
//       "cunt",
//       "harami",
//       "haramkhor",
//       "nali",
//       "randi",
//       "rundi",
//       "bhainchod",
//       "bhainke",
//       "madarchod",
//       "madke",
//       "chudail",
//       "chudakar",
//       "kutti",
//       "kutteki",
//       "gandi",
//       "gandu",
//       "gali",
//       "gande",
//       "randibaaz",
//       "randiwaala",
//       "hijra",
//       "hijri",
//     ];

//     let SexualWords = [
//       "chut",
//       "lund",
//       "gaand",
//       "gand",
//       "chudai",
//       "randi",
//       "rundi",
//       "sexi",
//       "sexy",
//       "pornstar",
//       "boobs",
//       "tits",
//       "ass",
//       "cock",
//       "pussy",
//       "fuck",
//       "fucking",
//       "sex",
//       "porno",
//       "porn",
//       "nangi",
//       "nude",
//       "sexy",
//       "hot",
//       "xxx",
//       "chudakar",
//       "chudail",
//       "randibaaz",
//       "randiwaala",
//       "hijra",
//       "hijri",
//       "kutti",
//       "kutteki",
//       "gandi",
//       "gandu",
//       "gali",
//       "gande",
//       "bhainchod",
//       "bhainke",
//       "madarchod",
//       "madke",
//       "masturbate",
//       "masturbation",
//       "penis",
//       "vagina",
//       "anus",
//       "oral",
//       "anal",
//       "vulva",
//       "clitoris",
//       "erection",
//       "orgasm",
//       "intercourse",
//       "copulate",
//       "coitus",
//       "fornicate",
//       "incest",
//       "sodomy",
//       "bestiality",
//       "pedophilia",
//     ];
//     if (SexualWords.some((word) => lowerCaseMessage.includes(word))) {
//       return "Warning: Abusive language detected. Please( Tharki) refrain from using such words.";
//     }

//     if (abusiveWords.some((word) => lowerCaseMessage.includes(word))) {
//       return "Please refrain from using abusive language. Let's keep the conversation respectful.";
//     }

//     // Responses for meal and diet-related queries
//     if (lowerCaseMessage.includes("bmi")) {
//       if (lowerCaseMessage.includes("useful")) {
//         return "BMI is useful because it provides a simple numeric measure of a person's thickness or thinness, allowing for easy classification and communication of potential health risks.";
//       } else if (lowerCaseMessage.includes("what is bmi")) {
//         return "BMI (Body Mass Index) is a measure of body fat based on your height and weight. You can calculate it by dividing your weight in kilograms by your height in meters squared.";
//       } else if (lowerCaseMessage.includes("why we see bmi")) {
//         return "We use BMI to assess whether a person has a healthy body weight for a given height. It helps in identifying potential weight-related health issues.";
//       }
//     } else if (lowerCaseMessage.includes("meal tracking")) {
//       if (lowerCaseMessage.includes("why track meal")) {
//         return "Tracking meals helps you understand your eating habits, manage portion sizes, and make healthier food choices, which can aid in weight management and overall health.";
//       } else if (lowerCaseMessage.includes("how to track meals")) {
//         return "To track your meals, consider using a food diary or a mobile app. Record everything you eat and drink throughout the day.";
//       } else if (lowerCaseMessage.includes("benefits of meal tracking")) {
//         return "Benefits of meal tracking include increased awareness of dietary habits, improved nutrition, better weight management, and easier identification of food-related issues.";
//       }
//     } else if (lowerCaseMessage.includes("health tips")) {
//       return "Here are some health tips: 1. Stay hydrated. 2. Eat a balanced diet rich in fruits and vegetables. 3. Exercise regularly.";
//     } else if (lowerCaseMessage.includes("diet plan")) {
//       return "To create a diet plan, start by determining your calorie needs, then plan meals that include proteins, carbs, and healthy fats.";
//     }

//     // Seasonal meal suggestions
//     if (lowerCaseMessage.includes("meal suggestions for winter")) {
//       return "For winter, consider hearty meals like soups, stews, roasted vegetables, and warm grains. Foods like oats, sweet potatoes, and lentils are great choices.";
//     } else if (lowerCaseMessage.includes("meal suggestions for summer")) {
//       return "In summer, enjoy light meals such as salads, grilled vegetables, smoothies, and fresh fruits. Think about incorporating foods like cucumbers, watermelon, and yogurt.";
//     }

//     // Specific meal-related queries
//     if (lowerCaseMessage.includes("healthy snacks")) {
//       return "Some healthy snack ideas include nuts, yogurt with fruits, vegetable sticks with hummus, and whole-grain crackers.";
//     } else if (lowerCaseMessage.includes("low carb meals")) {
//       return "Low-carb meal options include grilled chicken with vegetables, zucchini noodles, and salads with lean proteins.";
//     } else if (lowerCaseMessage.includes("meal prep tips")) {
//       return "Meal prep tips: 1. Plan your meals for the week. 2. Cook in batches. 3. Use clear containers for storage. 4. Label your meals.";
//     } else if (lowerCaseMessage.includes("vegetarian recipes")) {
//       return "Try these vegetarian recipes: 1. Chickpea salad 2. Vegetable stir-fry 3. Lentil soup 4. Quinoa salad.";
//     } else if (lowerCaseMessage.includes("high protein meals")) {
//       return "High protein meal options include grilled chicken, eggs, fish, lentils, and Greek yogurt.";
//     } else if (lowerCaseMessage.includes("meal suggestions for kids")) {
//       return "For kids, try fun meals like homemade pizzas, colorful veggie wraps, and smoothie bowls. Make it exciting with shapes and colors!";
//     }

//     // Further meal inquiries
//     if (lowerCaseMessage.includes("breakfast ideas")) {
//       return "Some healthy breakfast ideas include oatmeal with fruits, smoothies, eggs, or Greek yogurt with granola.";
//     } else if (lowerCaseMessage.includes("dinner recipes")) {
//       return "For dinner, consider grilled fish, quinoa bowls with vegetables, or stir-fried tofu.";
//     } else if (lowerCaseMessage.includes("calorie counting")) {
//       return "Calorie counting can be done using apps or websites where you log your food intake. It helps in managing your diet effectively.";
//     } else if (lowerCaseMessage.includes("gluten-free meals")) {
//       return "Gluten-free meal options include quinoa salads, rice bowls, and fresh fruit desserts.";
//     } else if (lowerCaseMessage.includes("meal planning")) {
//       return "Meal planning involves preparing meals for the week ahead. Choose recipes, make a shopping list, and set aside time to cook.";
//     }

//     // If no match found
//     return "I'm sorry, I didn't understand that. Can you please ask about BMI, meal tracking, or diet plans?";
//   };

//   const handleSendMessage = () => {
//     if (!userMessage.trim()) return;

//     const userChat = createChatMessage(userMessage.trim(), "outgoing");
//     setMessages((prevMessages) => [...prevMessages, userChat]);

//     const botResponse = getResponse(userMessage.trim());
//     const botMessage = createChatMessage(botResponse, "incoming");
//     setMessages((prevMessages) => [...prevMessages, botMessage]);

//     setUserMessage("");
//     scrollToBottom();
//   };

//   const scrollToBottom = () => {
//     chatboxRef.current?.scrollTo(0, chatboxRef.current.scrollHeight);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   return (
//     <div className="chatbot-wrapper">
//       {!chatOpen && (
//         <div className="chatbot-toggler" onClick={() => setChatOpen(true)}>
//           <FaRobot className="chat-icon" />
//         </div>
//       )}

//       {chatOpen && (
//         <div className="chatbot-container">
//           <div className="chat-header">
//             <h3>Swasth Assistant</h3>
//             <FaTimes className="close-btn" onClick={() => setChatOpen(false)} />
//           </div>

//           <ul className="chatbox" ref={chatboxRef}>
//             {messages.map((msg, index) => (
//               <li key={index} className={`chat ${msg.className}`}>
//                 {msg.className === "incoming" && (
//                   <FaRobot className="bot-icon" />
//                 )}
//                 <p>{msg.message}</p>
//               </li>
//             ))}
//           </ul>

//           <div className="chat-input">
//             <textarea
//               placeholder="Type your message..."
//               value={userMessage}
//               onChange={(e) => setUserMessage(e.target.value)}
//               onKeyDown={handleKeyDown}
//             />
//             <FaPaperPlane className="send-btn" onClick={handleSendMessage} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;
