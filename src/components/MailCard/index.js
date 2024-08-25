import "./index.css"

const MailCard = (data) => {
    const {id,body,fromEmail,toEmail} = data;
    console.log(fromEmail)
  return (
    <div className="mail-container">
        <h1 className="from-mail-name">{fromEmail}</h1>
        <p>{toEmail}</p>
    </div>
  )
}

export default MailCard
