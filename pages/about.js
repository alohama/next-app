import Link from 'next/link';
import PrimaryButton from './components/Button'
import DetailStatus from './components/Status';
import { useTranslation } from 'react-i18next';

const people = [
    {
        id: '1',
        name: 'จัดส่งสินค้าแล้ว',
        email: 'กรุงเทพมหานคร',
        image:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: '2',
        name: 'Kristen Ramos',
        email: 'kristen.ramos@example.com',
        image:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: '3',
        name: 'Ted Fox',
        email: 'ted.fox@example.com',
        image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

export default function Example() {
    const { t, i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };
    return (
        <div>
            <div class="grid grid-flow-col auto-cols-auto">
                <div>{t("title")}</div>
                <div>
                    <button onClick={() => changeLanguage('th')}>th</button>
                    <button onClick={() => changeLanguage('en')}>en</button>
                </div>
                <div>
                    <PrimaryButton src="https://i.imgur.com/dhkGGiw.png" title="Test1"></PrimaryButton>
                </div>
                <div>
                    <PrimaryButton src="https://i.imgur.com/xKlCKm7.png" title="Test2"></PrimaryButton>
                </div>
                <div>
                    <PrimaryButton src="https://i.imgur.com/mhPH95m.png" title="Test3"></PrimaryButton>
                </div>
                <div>
                    <PrimaryButton src="https://i.imgur.com/JdJEKrO.png" end="y" title="Test4"></PrimaryButton>
                </div>
            </div>
            <div>
                <ul className="divide-y divide-gray-200">
                    {people.map((person) => (
                        <li key={person.email} className="p-4 flex">

                            <img className="h-10 w-10 rounded-full" src="https://image.freepik.com/free-vector/illustration-check-arrow-icon_53876-35887.jpg" alt="" />
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">{person.name}</p>
                                <p className="text-sm text-gray-500">{person.email}</p>
                            </div>
                            <div className="absolute right-0">
                                <div className="ml-3">
                                    <p className="text-sm text-right font-medium text-gray-900">{person.name}</p>
                                    <p className="text-sm text-right text-gray-500">{person.email}</p>
                                </div>
                            </div>
                        </li>
                    ))
                    }
                </ul>
            </div>
            <div>
                <DetailStatus data="{a:'c',b:'obj'}"></DetailStatus>
            </div>
        </div>
    )
}