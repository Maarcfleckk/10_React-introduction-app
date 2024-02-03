export const Total = ({ exercises1, exercises2, exercises3 }) => {

    const sum = exercises1 + exercises2 + exercises3;

    return (
        <p>Number of exercises {sum}</p>
    );
};