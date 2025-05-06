// src/pages/HomePage.jsx
import React, { useEffect, useState } from 'react';
import NavCategory from '../Component/UI/NavCategory';
import ProductList from '../Component/UI/ProductList';
import { serverURL } from '../libs/http';
import { useNavigate } from 'react-router-dom';
import UserList from '../Component/UserList/UserList';

const HomePage = () => {
  const [users, setUsers] = useState([{
    state: "BAN",
    gender: "Male",
    birthOfDate: 1745897780730,
    name: "Nguyuen Tien",
    username: 'dev.quangnt',
    email: 'dev.quangnt@gmail.com',
    avatarUrl: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=vUjd58dVsMgQ7kNvwGYCy56&_nc_oc=AdnXgQV0ogY0VI87uo5nBWCEC2mvHMXoX7hQfOHnLiHsTpNUVh3zYH7mjGEDdX3QP78&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=JO9vF39X_vYnH7OixYB02A&oh=00_AfGeI9eUh2p2nx0dwGPeAdkK7nLvfVNLHuymGzJHg-ePDw&oe=680CC406",
    role: "user",
    address: "abcabcabcabn jn ajdn ajdn akjsdn jn adkjsna daca",
    phoneNumber: "0987665432",
  }, {
    name: "Nguyuen Tien Quang",
    username: 'dev.quangnt',
    email: 'dev.quangnt@gmail.com',
    avatarUrl: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=vUjd58dVsMgQ7kNvwGYCy56&_nc_oc=AdnXgQV0ogY0VI87uo5nBWCEC2mvHMXoX7hQfOHnLiHsTpNUVh3zYH7mjGEDdX3QP78&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=JO9vF39X_vYnH7OixYB02A&oh=00_AfGeI9eUh2p2nx0dwGPeAdkK7nLvfVNLHuymGzJHg-ePDw&oe=680CC406",
    role: "user",
    address: "abcabcabcabn jn ajdn ajdn akjsdn jn adkjsna daca",
    phoneNumber: "0987665432",
  }, {
    name: "Nguyuen Tien Quang",
    username: 'dev.quangnt',
    email: 'dev.quangnt@gmail.com',
    avatarUrl: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=vUjd58dVsMgQ7kNvwGYCy56&_nc_oc=AdnXgQV0ogY0VI87uo5nBWCEC2mvHMXoX7hQfOHnLiHsTpNUVh3zYH7mjGEDdX3QP78&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=JO9vF39X_vYnH7OixYB02A&oh=00_AfGeI9eUh2p2nx0dwGPeAdkK7nLvfVNLHuymGzJHg-ePDw&oe=680CC406",
    role: "user",
    address: "abcabcabcabn jn ajdn ajdn akjsdn jn adkjsna daca",
    phoneNumber: "0987665432",
  }, {
    name: "Nguyuen Tien Quang",
    username: 'dev.quangnt',
    email: 'dev.quangnt@gmail.com',
    avatarUrl: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=vUjd58dVsMgQ7kNvwGYCy56&_nc_oc=AdnXgQV0ogY0VI87uo5nBWCEC2mvHMXoX7hQfOHnLiHsTpNUVh3zYH7mjGEDdX3QP78&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=JO9vF39X_vYnH7OixYB02A&oh=00_AfGeI9eUh2p2nx0dwGPeAdkK7nLvfVNLHuymGzJHg-ePDw&oe=680CC406",
    role: "user",
    address: "abcabcabcabn jn ajdn ajdn akjsdn jn adkjsna daca",
    phoneNumber: "0987665432",
  }, {
    name: "Nguyuen Tien Quang",
    username: 'dev.quangnt',
    email: 'dev.quangnt@gmail.com',
    avatarUrl: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=vUjd58dVsMgQ7kNvwGYCy56&_nc_oc=AdnXgQV0ogY0VI87uo5nBWCEC2mvHMXoX7hQfOHnLiHsTpNUVh3zYH7mjGEDdX3QP78&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=JO9vF39X_vYnH7OixYB02A&oh=00_AfGeI9eUh2p2nx0dwGPeAdkK7nLvfVNLHuymGzJHg-ePDw&oe=680CC406",
    role: "user",
    address: "abcabcabcabn jn ajdn ajdn akjsdn jn adkjsna daca",
    phoneNumber: "0987665432",
  }, {
    name: "Nguyuen Tien Quang",
    username: 'dev.quangnt',
    email: 'dev.quangnt@gmail.com',
    avatarUrl: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=vUjd58dVsMgQ7kNvwGYCy56&_nc_oc=AdnXgQV0ogY0VI87uo5nBWCEC2mvHMXoX7hQfOHnLiHsTpNUVh3zYH7mjGEDdX3QP78&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=JO9vF39X_vYnH7OixYB02A&oh=00_AfGeI9eUh2p2nx0dwGPeAdkK7nLvfVNLHuymGzJHg-ePDw&oe=680CC406",
    role: "user",
    address: "abcabcabcabn jn ajdn ajdn akjsdn jn adkjsna daca",
    phoneNumber: "0987665432",
  }, {
    name: "Nguyuen Tien Quang",
    username: 'dev.quangnt',
    email: 'dev.quangnt@gmail.com',
    avatarUrl: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=vUjd58dVsMgQ7kNvwGYCy56&_nc_oc=AdnXgQV0ogY0VI87uo5nBWCEC2mvHMXoX7hQfOHnLiHsTpNUVh3zYH7mjGEDdX3QP78&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=JO9vF39X_vYnH7OixYB02A&oh=00_AfGeI9eUh2p2nx0dwGPeAdkK7nLvfVNLHuymGzJHg-ePDw&oe=680CC406",
    role: "user",
    address: "abcabcabcabn jn ajdn ajdn akjsdn jn adkjsna daca",
    phoneNumber: "0987665432",
  }, {
    name: "Nguyuen Tien Quang",
    username: 'dev.quangnt',
    email: 'dev.quangnt@gmail.com',
    avatarUrl: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=vUjd58dVsMgQ7kNvwGYCy56&_nc_oc=AdnXgQV0ogY0VI87uo5nBWCEC2mvHMXoX7hQfOHnLiHsTpNUVh3zYH7mjGEDdX3QP78&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=JO9vF39X_vYnH7OixYB02A&oh=00_AfGeI9eUh2p2nx0dwGPeAdkK7nLvfVNLHuymGzJHg-ePDw&oe=680CC406",
    role: "user",
    address: "abcabcabcabn jn ajdn ajdn akjsdn jn adkjsna daca",
    phoneNumber: "0987665432",
  }, {
    name: "Nguyuen Tien Quang",
    username: 'dev.quangnt',
    email: 'dev.quangnt@gmail.com',
    avatarUrl: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=vUjd58dVsMgQ7kNvwGYCy56&_nc_oc=AdnXgQV0ogY0VI87uo5nBWCEC2mvHMXoX7hQfOHnLiHsTpNUVh3zYH7mjGEDdX3QP78&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=JO9vF39X_vYnH7OixYB02A&oh=00_AfGeI9eUh2p2nx0dwGPeAdkK7nLvfVNLHuymGzJHg-ePDw&oe=680CC406",
    role: "user",
    address: "abcabcabcabn jn ajdn ajdn akjsdn jn adkjsna daca",
    phoneNumber: "0987665432",
  }, {
    name: "Nguyuen Tien Quang",
    username: 'dev.quangnt',
    email: 'dev.quangnt@gmail.com',
    avatarUrl: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/492804809_1331048907962344_9076142306362101331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH5-d3gebRUQ75CWelguqfV9L4dHzGJ2wv0vh0fMYnbCxSoSR_xSE_4KU-kFzZJJN2_iYZt4TM09qzP5ZbPmQW1&_nc_ohc=vUjd58dVsMgQ7kNvwGYCy56&_nc_oc=AdnXgQV0ogY0VI87uo5nBWCEC2mvHMXoX7hQfOHnLiHsTpNUVh3zYH7mjGEDdX3QP78&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=JO9vF39X_vYnH7OixYB02A&oh=00_AfGeI9eUh2p2nx0dwGPeAdkK7nLvfVNLHuymGzJHg-ePDw&oe=680CC406",
    role: "user",
    address: "abcabcabcabn jn ajdn ajdn akjsdn jn adkjsna daca",
    phoneNumber: "0987665432",
  }]);
  
  
 useEffect(() => {
    fetch(serverURL + "/api/admin/account", {
        method: "GET",
        header: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_TOKEN_HERE'
        },
    }).then(res => res.json()).then(data => {
      setUsers(data);
    }).catch(err => console.log(err))
     }, []);

     const navigation = useNavigate();

   

  return (
    <div className="HomePage"> 
      <div className="wrap-users">
        <h2 className="title">Người dùng</h2>
        <UserList users={users}/>
      </div>
    </div>
  );
};

export default HomePage;
