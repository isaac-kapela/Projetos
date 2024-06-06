import Video from "../../assets/videoConvite.mp4"
export default function Conteudo() {
  return (
    <>
        <video autoPlay loop muted style={{width: "100%", height: "100%", objectFit: "cover"}}>
            <source src={Video} type="video/mp4"/>
        </video>
    </>
  )
}
