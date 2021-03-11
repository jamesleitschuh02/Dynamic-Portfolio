import React from 'react';

function Contact() {
    return (
        <form action="/action_page.php">
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />
      
          <label for="lname">Email</label>
          <input type="text" id="lname" name="lastname" placeholder="Example.email.com.." />
      
          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
      
          <input type="submit" value="Submit" />
        </form>
    );
}

export default Contact;