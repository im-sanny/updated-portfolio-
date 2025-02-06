// utils/confettiUtils.ts

export const createConfettiEffect = () => {
  // Create container
  const confettiContainer = document.createElement('div');
  confettiContainer.style.position = 'fixed';
  confettiContainer.style.top = '0';
  confettiContainer.style.left = '0';
  confettiContainer.style.width = '100%';
  confettiContainer.style.height = '100%';
  confettiContainer.style.pointerEvents = 'none';
  confettiContainer.style.zIndex = '9999';

  // Add confetti elements
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement('div');
    const size = Math.random() * 10 + 5; // Random size between 5px and 15px
    const shape = Math.random() > 0.5 ? 'rectangle' : 'circle'; // Random shape
    const color = `hsl(${Math.random() * 360}, 50%, 50%)`; // Random color

    confetti.style.position = 'absolute';
    confetti.style.width = `${size}px`;
    confetti.style.height = `${shape === 'circle' ? size : size / 2}px`; // Circles are square, rectangles are taller
    confetti.style.backgroundColor = color;
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.top = `${Math.random() * -50}%`; // Start above the viewport
    confetti.style.borderRadius = shape === 'circle' ? '50%' : '0';
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

    // Add animation
    const animationDuration = Math.random() * 3 + 2; // Random duration between 2s and 5s
    const horizontalMovement = Math.random() * 200 - 100; // Random horizontal movement (-100px to 100px)
    confetti.style.animation = `confetti-fall ${animationDuration}s linear forwards`;
    confetti.style.setProperty(
      '--horizontal-movement',
      `${horizontalMovement}px`,
    );

    confettiContainer.appendChild(confetti);
  }

  // Add animation keyframes
  const style = document.createElement('style');
  style.textContent = `
    @keyframes confetti-fall {
      0% {
        transform: translate(0, 0) rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: translate(var(--horizontal-movement), 100vh) rotate(720deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
  document.body.appendChild(confettiContainer);

  // Cleanup function
  return () => {
    document.body.removeChild(confettiContainer);
    document.head.removeChild(style);
  };
};

export const triggerExplodeEffect = (
  setIsExploding: (value: boolean) => void,
  duration = 2000,
) => {
  setIsExploding(true);

  // Randomize background color
  document.body.style.backgroundColor = `rgb(
    ${Math.random() * 255},
    ${Math.random() * 255},
    ${Math.random() * 255}
  )`;

  // Create and start confetti
  const cleanup = createConfettiEffect();

  // Cleanup after duration
  setTimeout(() => {
    setIsExploding(false);
    document.body.style.backgroundColor = '';
    cleanup();
  }, duration);
};
