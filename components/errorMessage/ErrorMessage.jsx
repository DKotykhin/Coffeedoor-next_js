import Image from "next/image";
// import img from "./sorry_1.jpg";

const ErrorMessage = () => {
    return (
        <div
            style={{
                display: "block",
                width: "250px",
                height: "250px",
                objectFit: "contain",
                margin: "100px auto",
            }}
        >
            <Image 
                src={'/sorry_1.jpg'} 
                alt="error"
                width={270}
                height={270} />
        </div>
    );
};

export default ErrorMessage;
