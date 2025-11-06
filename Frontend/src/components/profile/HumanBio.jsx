import { useState } from 'react';

function HumanBio({ userData, isEditMode }) {
  // Available prompts
  const availablePrompts = [
    "My perfect Sunday looks like...",
    "I'm weirdly passionate about...",
    "My simple pleasures...",
    "I geek out on...",
    "My guilty pleasure is...",
    "You should NOT go out with me if...",
    "I'm looking for someone who...",
    "My ideal first date...",
    "I spend too much time...",
    "A random fact I love is...",
    "The way to win me over is...",
    "I'm the type of person who...",
    "My most irrational fear...",
    "The dorkiest thing about me...",
    "I won't shut up about...",
    "My most controversial opinion...",
    "I'm overly competitive about...",
    "The best way to ask me out is...",
    "I take pride in...",
    "A life goal of mine..."
  ];

  const [prompts, setPrompts] = useState(userData.humanBioPrompts || [
    { id: 1, question: "My perfect Sunday looks like...", answer: "Brunch with friends, working on side projects, and ending with a good movie" },
    { id: 2, question: "I geek out on...", answer: "New programming languages and mechanical keyboards" },
    { id: 3, question: "My guilty pleasure is...", answer: "Binging reality TV shows while pretending I don't watch them" }
  ]);

  const [interests, setInterests] = useState(userData.interests || ['Coding', 'Coffee', 'Hiking', 'Music', 'Travel']);
  const [newInterest, setNewInterest] = useState('');
  const maxPromptLength = 200;

  const handleAddPrompt = () => {
    if (prompts.length < 5) {
      const newPrompt = {
        id: Date.now(),
        question: availablePrompts[0],
        answer: ''
      };
      setPrompts([...prompts, newPrompt]);
    }
  };

  const handleRemovePrompt = (id) => {
    setPrompts(prompts.filter(p => p.id !== id));
  };

  const handlePromptQuestionChange = (id, newQuestion) => {
    setPrompts(prompts.map(p => 
      p.id === id ? { ...p, question: newQuestion } : p
    ));
  };

  const handlePromptAnswerChange = (id, newAnswer) => {
    setPrompts(prompts.map(p => 
      p.id === id ? { ...p, answer: newAnswer.slice(0, maxPromptLength) } : p
    ));
  };

  const handleAddInterest = () => {
    if (newInterest.trim() && interests.length < 10) {
      setInterests([...interests, newInterest.trim()]);
      setNewInterest('');
    }
  };

  const handleRemoveInterest = (interest) => {
    setInterests(interests.filter(i => i !== interest));
  };

  return (
    <div className="profile-section human-bio-section">
      <div className="section-header">
        <h3>About Me</h3>
        <span className="section-subtitle">The human side 🌟</span>
      </div>

      {/* Hinge-Style Prompts */}
      <div className="prompts-container">
        {prompts.map((prompt) => (
          <div key={prompt.id} className="prompt-card">
            {isEditMode ? (
              <>
                <select
                  className="prompt-select"
                  value={prompt.question}
                  onChange={(e) => handlePromptQuestionChange(prompt.id, e.target.value)}
                >
                  {availablePrompts.map((q) => (
                    <option key={q} value={q}>{q}</option>
                  ))}
                </select>
                <textarea
                  className="prompt-answer-input"
                  placeholder="Your answer..."
                  value={prompt.answer}
                  onChange={(e) => handlePromptAnswerChange(prompt.id, e.target.value)}
                  maxLength={maxPromptLength}
                />
                <div className="prompt-footer">
                  <span className="char-counter">{prompt.answer.length}/{maxPromptLength}</span>
                  <button 
                    className="remove-prompt-btn"
                    onClick={() => handleRemovePrompt(prompt.id)}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              </>
            ) : (
              <>
                <h4 className="prompt-question">{prompt.question}</h4>
                <p className="prompt-answer">{prompt.answer}</p>
              </>
            )}
          </div>
        ))}

        {isEditMode && prompts.length < 5 && (
          <button className="add-prompt-btn" onClick={handleAddPrompt}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>Add Prompt ({prompts.length}/5)</span>
          </button>
        )}
      </div>

      {/* Interests Section */}
      <div className="interests-section">
        <h4 className="interests-title">Interests & Hobbies</h4>
        <div className="interests-tags">
          {interests.map((interest) => (
            <span key={interest} className="interest-tag">
              {interest}
              {isEditMode && (
                <button 
                  className="remove-interest-btn"
                  onClick={() => handleRemoveInterest(interest)}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              )}
            </span>
          ))}
          
          {isEditMode && interests.length < 10 && (
            <div className="add-interest-input">
              <input
                type="text"
                placeholder="Add interest..."
                value={newInterest}
                onChange={(e) => setNewInterest(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddInterest()}
              />
              <button onClick={handleAddInterest}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HumanBio;