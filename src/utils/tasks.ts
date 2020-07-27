export function generateTasks(crops: any): any {
  if (!crops) {
    return [];
  }

  return crops.map((crop: any) => ({
    id: crop.id,
    text: 'This is a task',
  }));
}
