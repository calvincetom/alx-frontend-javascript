export default function taskBlock(trueOrFalse) {
    const task = false; // Use const because task is never reassigned
    const task2 = true; // Use const because task2 is never reassigned
  
    if (trueOrFalse) {
      // No reassignment inside the block, as const prevents that.
    }
  
    return [task, task2]; // Return the original values
  }
  