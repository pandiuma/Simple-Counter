function Counter() {
    return (
        <div style={styles.container}>
            <h1 style={styles.number}>0</h1>
            <button style={styles.button}>Increase</button>
        </div>
    );
}

const styles = {
    container: {
        textAlign: "center",
        padding: "20px",
    },
    number: {
        fontSize: "48px",
        marginBottom: "20px",
    },
    button: {
        padding: "10px 20px",
        fontSize: "18px",
        cursor: "pointer",
    },
};
export default Counter;