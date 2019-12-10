import {useState} from 'react'

export default function useFeedBack() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMess, setUserMail] = useState('');

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value)
  };

  const onChangeLastName = (e) => {
    setLastName(e.target.value)
  };

  const onChangeUserPhone = (e) => {
    setUserPhone(e.target.value)
  };

  const onChangeUserEmail = (e) => {
    setUserEmail(e.target.value)
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
