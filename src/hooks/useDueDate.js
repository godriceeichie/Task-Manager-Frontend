export const useDueDate = () => {
    // Helper function to calculate time remaining
    const calculateTimeRemaining = (dueDate) => {
    const currentDate = new Date();
    const timeDiff = dueDate.getTime() - currentDate.getTime();
  
    // Convert time difference to positive value (in case dueDate is in the past)
    const timeRemaining = Math.abs(timeDiff);
    
    return timeRemaining;
  };
  
  // Helper function to format time remaining
    const formatTimeRemaining = (timeRemaining) => {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
    const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  
    if (years > 0) {
      return `${years} year(s) left`;
    } else if (months > 0) {
      return `${months} month(s) left`;
    } else if (days > 0) {
      return `${days} day(s) left`;
    } else {
      return `${hours} hour(s) left`;
    }
  };
  
  return { calculateTimeRemaining, formatTimeRemaining}
}