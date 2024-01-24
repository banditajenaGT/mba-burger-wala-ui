import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { contact } from "../redux/actions/user";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const contactHandler = async(e) => {
    e.preventDefault();
    await dispatch(contact(name, email, text));
    setText("");
  };

  return (
    <section className="contact">
      <motion.form
        initial={{
          x: "-100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ delay: "0.2" }}
        onSubmit={contactHandler}
      >
        <h2>Contact Us</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <button>Send</button>
      </motion.form>
      <motion.div
        className="formBorder"
        initial={{
          x: "100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ delay: "0.2" }}
      >
        <motion.div
          initial={{
            y: "-100vw",
            opacity: 0,
          }}
          animate={{
            y: "-50%",
            opacity: 1,
          }}
          transition={{ delay: "0.6" }}
        >
          <img
            src={
              "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="
            }
            alt="Burger"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
