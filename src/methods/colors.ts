const colors = [
    'bg-green',
    'bg-blue',
    'bg-yellow-500',
    'bg-orange',
];
export const getRandomColor = (): string => {
    return colors[Math.floor(Math.random() * colors.length)];
}