import contacts from "./contact.list"
import Detail from "./detail.component"
import AvatarImg from "./avatar.component"

const ContactList = (props) => {
    // console.log(contacts)
    // let people = contacts
    return (
        <div>
           
            <h2 className='contacts'>My contacts</h2>
            {/* <AvatarImg img={contacts[0].img} /> */}
            {contacts.map((contact, index) => (
                <div className='contact-card' key={index}>
                <div className="name-div">
                <h3 className='name'>{contact.name}</h3>
                </div>
                <p>{index + 1}</p>
                
                
                <AvatarImg img={contact.img} />
               
                <Detail detail={contact.phone}/>
                <Detail detail={contact.email}/>
    
            </div>
            ))}
                
        </div>
    )
    

}

export default ContactList