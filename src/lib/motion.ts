export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const slideLeft = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

export const slideRight = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};
