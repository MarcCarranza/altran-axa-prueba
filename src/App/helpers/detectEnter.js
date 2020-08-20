export const detectEnter = ({ key, func }) => {
    if (key === 'Enter') {
        func()
    }
}