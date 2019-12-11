import {useState} from 'react'

export default function useFeedBack() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMess, setUserMail] = useState('');

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const validatePhone = (phone) => /^\+?3?8?(0\d{9})$/.test(phone);

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
    e.target.value.length < 3 ? setFirstName(false) : setFirstName(e.target.value);
  };

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const onChangeUserPhone = (e) => {
    validatePhone(e.target.value) ? setUserPhone(e.target.value) : setUserPhone(false);
  };

  const onChangeUserEmail = (e) => {
    validateEmail(e.target.value) ? setUserEmail(e.target.value) : setUserEmail(false);
  };

  const onChangeUserMess = (e) => {
    setUserMail(e.target.value)
  };

  return {
    onChangeFirstName,
    onChangeLastName,
    onChangeUserPhone,
    onChangeUserEmail,
    onChangeUserMess,
    firstName,
    lastName,
    userPhone,
    userEmail,
    userMess
  }
};
