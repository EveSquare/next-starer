type Props = {
  title: string;
};

export const OGPImage: React.FC<Props> = ({ title }) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        backgroundSize: "100% 100%",
        height: "100%",
        width: "100%",
        display: "flex",
        textAlign: "left",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        flexWrap: "nowrap",
      }}
    >
      <div
        style={{
          width: "100%",
          fontSize: 60,
          fontStyle: "normal",
          fontWeight: "bold",
          color: "#000",
          padding: "0 120px",
          lineHeight: 1.3,
          marginBottom: "30px",
          wordWrap: "break-word",
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default OGPImage;
