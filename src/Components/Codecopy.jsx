/* eslint-disable react/prop-types */
import { useState } from 'react';

const TerminalCard = ({ code }) => {
  const codeSnippet = code;
  
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet.trim()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className="card" style={styles.card}>
      <div className="wrap" style={styles.wrap}>
        <div className="terminal" style={styles.terminal}>
          <hgroup className="head" style={styles.head}>
            <p className="title" style={styles.title}>
              <svg
                width="16px"
                height="16px"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
              >
                <path d="M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"></path>
              </svg>
              Code
            </p>
            <button
              className="copy_toggle"
              tabIndex="-1"
              type="button"
              onClick={handleCopy}
              style={{ ...styles.copyToggle, backgroundColor: copied ? '#28a745' : '#202425' }} 
            >
              <svg
                width="16px"
                height="16px"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
              >
                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
              </svg>
            </button>
          </hgroup>
          <div className="body" style={styles.body}>
            <pre className="pre" style={styles.pre}>
              <code>{codeSnippet.trim()}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    padding: '1rem',
    overflow: 'hidden',
    border: '1px solid #c5c5c5',
    borderRadius: '12px',
    backgroundColor: '#d9d9d92f',
    backdropFilter: 'blur(8px)',
    minWidth: '344px',
  },
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    position: 'relative',
    zIndex: 10,
    border: '0.5px solid #525252',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  terminal: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  head: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    minHeight: '40px',
    paddingInline: '12px',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    backgroundColor: '#202425',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    height: '2.5rem',
    userSelect: 'none',
    fontWeight: 600,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: '#8e8e8e',
  },
  copyToggle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.25rem',
    border: '0.65px solid #c1c2c5',
    marginLeft: 'auto',
    borderRadius: '6px',
    color: '#8e8e8e',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    borderBottomRightRadius: '8px',
    borderBottomLeftRadius: '8px',
    overflowX: 'auto',
    padding: '1rem',
    lineHeight: '19px',
    color: 'white',
    backgroundColor: 'black',
    whiteSpace: 'pre-wrap',
  },
  pre: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    whiteSpace: 'pre-wrap',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    boxSizing: 'border-box',
    fontSize: '16px',
  },
};

export default TerminalCard;


