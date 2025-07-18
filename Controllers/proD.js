const product = require('../Models/product');
const Product = require('../Models/product'); // นำเข้าโมเดลผลิตภัณฑ์
exports.read = async (req, res) => {
   try {
      //code
      const id = req.params.id; // รับ ID จากพารามิเตอร์
      const producted = await product.find({ _id: id }).exec();
      res.send(producted);
} catch (err) {
    // error
    console.log(err);
    res.status(500).send('Server Error');
}
}

exports.list = async (req, res) => {
   try {
      //code
      const producted = await product.find({}).exec();
      res.send(producted);
} catch (err) {
    // error
    console.log(err);
    res.status(500).send('Server Error');
}
}
//การสร้างฟังก์ชัน create สำหรับการสร้างผลิตภัณฑ์ใหม่
exports.create = async (req, res) => {
   try {
      //code
    console.log(req.body);// ข้อมูลที่ส่งมาจากผู้ใช้

    const producted = await Product(req.body).save();
    res.send(producted);// ส่งข้อมูลผลิตภัณฑ์ที่สร้างขึ้นกลับไปยังผู้ใช้

} catch (err) {
    // error
    console.log(err);
    res.status(500).send('Server Error');
}
}
//การอัปเดตฟังก์ชัน update สำหรับการอัปเดตผลิตภัณฑ์
exports.update = async (req, res) => {
   try {
      //code
      const id = req.params.id; // รับ ID จากพารามิเตอร์
      const updated = await Product
        .findOneAndUpdate({_id: id }, req.body, { new: true})
        .exec();
      res.send(updated);
} catch (err) {
    // error
    console.log(err);
    res.status(500).send('Server Error');
}
}

exports.remove = async (req, res) => {
   try {
      //code
      const id = req.params.id; // รับ ID จากพารามิเตอร์
      const remove = await Product
        .findOneAndDelete({_id: id }).exec();
      res.send(remove);
} catch (err) {
    // error
    console.log(err);
    res.status(500).send('Server Error');
}
}