import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div>
            <div>
                <h2 className='text-center mt-4 mb-3'>কোর্স সম্পর্কিত সাধারণ জিজ্ঞাসা...</h2>
            </div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Ai course suru korer asa amar ki ki purbo prusisti thaka dorker.</Accordion.Header>
                    <Accordion.Body>
                    আমরা যেহেতু একদম শূন্য থেকে শেখাচ্ছি। তাই তোমাকে আগে থেকে তেমন কিছু জানা লাগবে না। তবে তোমার হাতে যদি সময় থাকে তাহলে এই তিনটা কাজ করে ফেলতে পারো। ১. ভিডিও দেখে দেখে জিনিসগুলো মাথায় ঢুকানোর জন্য একটুখানি ব্রেনের খালি জায়গা রাখতে হবে। ২. কোর্স এ জয়েন করলেই অটো ওয়েব ডেভেলপার হয়ে যাবে না। হার্ডওয়ার্ক করার, লেগে থাকার মেন্টালিটি থাকতে হবে। ৩. কোথাও আটকে গেলে হেল্প চাওয়ার মেন্টালিটি এবং লেগে থাকার ইচ্ছা রাখতে হবে।
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Ai course gula shika kota goggta knom hoya  lagbo</Accordion.Header>
                    <Accordion.Body>
                    আমরা কোর্সটি এমনভাবে সাজিয়েছি যেখানে একাডেমিক ব্যাকগ্রাউন্ড ম্যাটার করে না। তুমি যেকোনো একাডেমিক ব্যাকগ্রাউন্ড থেকে এই কোর্সটি করতে পারবে। চাইলে ভার্সিটির স্টুডেন্ট, কলেজের স্টুডেন্ট, চাকরিজীবি, বেকার, প্রেমিক, পলাতক প্রেমিক, এমনকি ফোন ধরে না এমন প্রেমিকা সবাই যাতে শিখতে পারে সেজন্য একদম শূন্য থেকে শুরু করা হয়েছে। তবে অবশ্যই সময় দিতে হবে ৬-৮ ঘন্টা। মিনিমাম ৪-৫ ঘন্টা।
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>course কনটেন্ট ki final</Accordion.Header>
                    <Accordion.Body>
                    প্রয়োজন অনুসারে সবসময় আপডেট করা হয় কনটেন্ট। আমরা ইন্ডাস্ট্রি ফিডব্যাক, আমাদের নিজেদের ফিডব্যাক, কারেন্ট স্টুডেন্টদের ফিডব্যাক এবং যে স্টুডেন্ট রা বর্তমানে চাকরী করছে তাদের ফিডব্যাক মিলিয়ে আমরা প্রতি ব্যাচে কনটেন্ট আপডেট করি।
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>এই কোর্সে WordPress বা freelancing রিলেটেড সরাসরি কিছু asa</Accordion.Header>
                    <Accordion.Body>
                    এই কোর্সে WordPress বা freelancing রিলেটেড সরাসরি কিছু নাই। কারণ, এই কোর্সের উদ্দেশ্য হচ্ছে সফটওয়্যার কোম্পানিতে ওয়েব ডেভেলপার বলতে যেটা বুঝানো হয় সেটা হতে চায় তাদের জন্য। এছাড়া এডভান্সড লেভেলে ওয়ার্ডপ্রেস কাস্টমাইজ করতে গেলে Web Development, App Devlopment, SEO, Ethical Hacking, Digital Marketing, এমনকি Graphic Design ও জানতে হয়। সেগুলা এই কোর্স থেকে শিখতে পারবে। তবে freelancing বা WordPress কে এই কোর্স হাইলাইট করা হয়নি।
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;