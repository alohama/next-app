import Image from 'next/image';
const DetailStatus = ({ src, end, data, ...props }) => (
    <div className="shadow-lg font-medium bg-white rounded-md p-4 divide-solid relative">

            <h1><b>รายละเอียดการขนส่ง</b></h1>

        <hr/>

            <ul>
                <li>หมายเลข <p className="absolute right-0 text-gray-500">#123456</p></li>
                <li>เจ้าของสินค้า <p className="absolute right-0 text-gray-500">#123456</p></li>
                <li>บริษัทจัดส่ง <p className="absolute right-0 text-gray-500">#123456</p></li>
                <li>ประเภทรถ <p className="absolute right-0 text-gray-500">#123456</p></li>
                <li>พื้นที่จัดส่ง <p className="absolute right-0 text-gray-500">#123456</p></li>
            </ul>
    </div>
)

export default DetailStatus