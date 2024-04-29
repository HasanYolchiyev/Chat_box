import React, { useState } from 'react';
import './css/chatbox.css'

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleMessageSend = () => {
    if (input.trim() !== '') {
      const newMessage = { text: input, sender: 'user' };
      setMessages([...messages, newMessage]);
      setInput('');
      // Burada normalde sunucuya mesajı göndermek gibi işlemler yapılır.

      // Soruya göre cevap oluştur
      const replyMessage = generateReply(input);
      if (replyMessage) {
        setTimeout(() => {
          setMessages([...messages, replyMessage]);
        }, 1000); // 1 saniye sonra cevabı göster
      }
    }
  };

  // Soruya göre cevap oluşturan fonksiyon
  const generateReply = (question) => {
    const lowerCaseQuestion = question.toLowerCase().trim();
    let reply = null;

    if (lowerCaseQuestion.includes('nasilsin')) {
      reply = { text: 'Ben bir chat botuyum, teşekkür ederim! Siz nasılsınız?', sender: 'bot' };
    } else if (lowerCaseQuestion.includes('saat kaç')) {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();
      const currentMinute = currentDate.getMinutes();
      reply = { text: `Şu an saat ${currentHour}:${currentMinute}`, sender: 'bot' };
    }

    if (lowerCaseQuestion.includes('selam')) {
      reply = { text: 'Ben bir chat botuyum Merhaba', sender: 'bot' };
    }else if(lowerCaseQuestion.includes('2*2?')){
      reply ={text:'eğer sorunuz 2*2 kaç eder sorusuysa cevap 4',sender:'bot'};
    }

      // if (lowerCaseQuestion.includes('temizle')) {
      //   reply = { text: 'Ben bir chat botuyum Merhaba', sender: 'bot' };
      // }else if(lowerCaseQuestion.includes('2*2?')){
      //   reply ={text:'4',sender:'bot'};
      // }

    return reply;
  };

  return (
    <div className="cht">
      
    <div className="chat-box chatbox">
      <div className="logo">
        <img src="https://www.reshot.com/preview-assets/icons/CFQBSZJLGV/dropbox-CFQBSZJLGV.svg" alt="" />
      </div>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))} 
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Mesajınızı buraya yazın"
      />
      <button onClick={handleMessageSend}>Gönder</button>
    </div>
    </div>
  );
}

export default ChatBox;
 