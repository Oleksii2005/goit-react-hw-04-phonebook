import { useLocalStorage } from 'components/hooks/useLocalStorage';
// import { Component } from 'react';
import css from './ContactForm.module.css';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useLocalStorage('name', '');
  const [number, setNumber] = useLocalStorage('number', '');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!onSubmit({ name, number })) return;
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.phonebook_container} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яіїєА-ЯІЇЄ]+(([' \-][a-zA-Zа-яіїєА-ЯІЇЄ ])?[a-zA-Zа-яіїєА-ЯІЇЄ]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button
        type="submit"
        className={css.phonebook_button}
        disabled={!name || !Number(number)}
      >
        Add contact
      </button>
    </form>
  );
}

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };
//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     if (!this.props.onSubmit({ ...this.state })) return;
//     this.reset();
//   };
//   reset() {
//     this.setState({ name: '', number: '' });
//   }
//   render() {
//     const { name, number } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit} className={css.phonebook_container}>
//         <label className={css.label}>
//           Name
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яіїєА-ЯІЇЄ]+(([' \-][a-zA-Zа-яіїєА-ЯІЇЄ ])?[a-zA-Zа-яіїєА-ЯІЇЄ]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={name}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label className={css.label}>
//           Number
//           <input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={number}
//             onChange={this.handleChange}
//           />
//         </label>
//         <button
//           type="submit"
//           className={css.phonebook_button}
//           disabled={!name || !Number(number)}
//         >
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// export default ContactForm;
// return (
//   <form onSubmit={this.handleSubmit} className={css.phonebook_container}>
//     <label className={css.label}>
//       Name
//       <input
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яіїєА-ЯІЇЄ]+(([' \-][a-zA-Zа-яіїєА-ЯІЇЄ ])?[a-zA-Zа-яіїєА-ЯІЇЄ]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//         value={name}
//         onChange={this.handleChange}
//       />
//     </label>
//     <label className={css.label}>
//       Number
//       <input
//         type="tel"
//         name="number"
//         pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//         value={number}
//         onChange={this.handleChange}
//       />
//     </label>
//     <button
//       type="submit"
//       className={css.phonebook_button}
//       disabled={!name || !Number(number)}
//     >
//       Add contact
//     </button>
//   </form>
// );
