* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.container {
    text-align: center;
    background: rgba(255, 255, 255, 0.9);
    padding: 60px 40px;
    border-radius: 30px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    max-width: 500px;
    position: relative;
    animation: fadeIn 0.8s ease-in;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.heart {
    width: 80px;
    height: 80px;
    background: #ff6b9d;
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%) rotate(-45deg);
    animation: heartbeat 1.5s infinite;
}

.heart:before,
.heart:after {
    content: "";
    width: 80px;
    height: 80px;
    background: #ff6b9d;
    border-radius: 50%;
    position: absolute;
}

.heart:before {
    top: -40px;
    left: 0;
}

.heart:after {
    left: 40px;
    top: 0;
}

@keyframes heartbeat {
    0%, 100% {
        transform: translateX(-50%) rotate(-45deg) scale(1);
    }
    50% {
        transform: translateX(-50%) rotate(-45deg) scale(1.1);
    }
}

h1 {
    color: #d63384;
    font-size: 2.5em;
    margin-bottom: 20px;
    margin-top: 40px;
}

.message {
    color: #666;
    font-size: 1.2em;
    margin-bottom: 40px;
}

.buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 20px;
}

button {
    padding: 15px 40px;
    font-size: 1.2em;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
}

.yes-btn {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
}

.yes-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 30px rgba(245, 87, 108, 0.4);
}

.no-btn {
    background: #e0e0e0;
    color: #666;
}

.no-btn:hover {
    background: #d0d0d0;
}

.response {
    margin-top: 30px;
    font-size: 1.5em;
    font-weight: bold;
    color: #d63384;
    animation: slideUp 0.5s ease-out;
}

.response.hidden {
    display: none;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}