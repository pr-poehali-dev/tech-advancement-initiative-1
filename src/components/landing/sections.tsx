import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Набор открыт</Badge>,
    title: "Служи. Защищай. Владимирский централ.",
    showButton: true,
    buttonText: 'Подать заявку',
    imageUrl: 'https://cdn.poehali.dev/projects/ae56092b-c7a8-481a-acdb-92e56c1fe009/files/e73055bd-53a1-44c5-8e1c-8c04669be6b1.jpg'
  },
  {
    id: 'about',
    title: 'О учреждении',
    content: 'ФКУ ИК-2 «Владимирский централ» — федеральное казённое учреждение ФСИН России. Одно из старейших и наиболее известных исправительных учреждений страны с богатой историей государственной службы.',
    imageUrl: 'https://cdn.poehali.dev/projects/ae56092b-c7a8-481a-acdb-92e56c1fe009/files/1275e658-30a2-4621-8a15-5f22849135e9.jpg'
  },
  {
    id: 'features',
    title: 'Условия службы',
    content: 'Стабильная заработная плата, социальный пакет, льготный выход на пенсию, форменное обмундирование, служебное жильё (при наличии), ежегодный оплачиваемый отпуск от 30 суток.',
  },
  {
    id: 'requirements',
    title: 'Требования',
    content: 'Гражданство РФ, возраст от 18 до 35 лет, среднее общее образование, годность по состоянию здоровья, отсутствие судимостей. Приветствуется служба в армии.',
    imageUrl: 'https://cdn.poehali.dev/projects/ae56092b-c7a8-481a-acdb-92e56c1fe009/files/6a959d2c-011e-4346-ac33-ebdcc8f90846.jpg'
  },
  {
    id: 'join',
    title: 'Как поступить на службу',
    content: 'Обратитесь в отдел кадров учреждения по адресу: г. Владимир, ул. Большая Нижегородская, 67. Телефон: 8 (4922) 32-10-10. Приём документов — в рабочие дни с 9:00 до 17:00.',
    showButton: true,
    buttonText: 'Подать заявку'
  },
]
