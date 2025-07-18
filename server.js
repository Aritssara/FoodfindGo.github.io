const express = require('express');
const { readdirSync } = require('fs');
const morgan = require('morgan');
const cors = require('cors'); // นำเข้า cors สำหรับการจัดการ CORS
const bodyParse = require('body-parser');

const connectDB = require('./config/db');

//const productRoutes = require('./Routes/product'); // นำเข้าเส้นทางผลิตภัณฑ์


const app = express(); 
connectDB();


app.use(morgan('dev')); // ใช้ morgan สำหรับการบันทึกคำขอ HTTP
app.use(cors());
app.use(bodyParse.json({ limit: '10mb' }));


// //route สำหรับหน้าแรก
// app.get('/product', (req, res) => {
//   res.send('Hello, World!'); //ส่งข้อความ "Hello, World!" กลับไปยังผู้ใช้
// });

//app.use('/api', productRoutes);

readdirSync('./Routes').map((r) => app.use('/api', require(`./Routes/`+r)));

app.listen(5000, () => console.log('Server running on port 5000'));//การรันเซิร์ฟเวอร์ที่พอร์ต 5000
