import { FC } from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./HeaderDropdown.module.scss";

const genres = [
  { title: "Драмы", path: "/movies?genre=1" },
  { title: "Криминал", path: "/movies?genre=2" },
  { title: "Мультфильмы", path: "/movies?genre=3" },
  { title: "Фантастика", path: "/movies?genre=4" },
  { title: "Боевики", path: "/movies?genre=5" },
  { title: "Комедии", path: "/movies?genre=6" },
  { title: "Фэнтези", path: "/movies?genre=7" },
  { title: "Детективы", path: "/movies?genre=8" },
  { title: "Триллеры", path: "/movies?genre=9" },
  { title: "Биография", path: "/movies?genre=10" },
  { title: "Мелодрамы", path: "/movies?genre=11" },
  { title: "Вестерны", path: "/movies?genre=12" },
  { title: "Музыкальные", path: "/movies?genre=13" },
  { title: "История", path: "/movies?genre=14" },
  { title: "Приключения", path: "/movies?genre=15" },
  { title: "Аниме", path: "/movies?genre=16" },
  { title: "Ужасы", path: "/movies?genre=17" },
  { title: "Мюзиклы", path: "/movies?genre=18" },
  { title: "Военные", path: "/movies?genre=19" },
  { title: "Спортивные", path: "/movies?genre=20" },
  { title: "Семейные", path: "/movies?genre=21" },
];

const country = [
  { title: "Русское", path: "/movies?country=1" },
  { title: "Зарубежное", path: "#" },
  { title: "Советское", path: "#" },
];

const years = [
  { title: "Фильмы 2023 года", path: "#" },
  { title: "Фильмы 2022 года", path: "#" },
  { title: "Фильмы 2021 года", path: "#" },
  { title: "Фильмы 2020 года", path: "#" },
];

const collection = [
  { title: "Новинки", path: "#" },
  { title: "Подборки", path: "#" },
  { title: "Иви.Рейтинг", path: "#" },
  { title: "Скоро на Иви", path: "#" },
  { title: "Трейлеры", path: "#" },
  { title: "Что посмотреть", path: "#" },
  { title: "Фильмы в HD", path: "#" },
  { title: "Выбор Иви", path: "#" },
  { title: "Новинки подписки", path: "#" },
  { title: "Фильмы Amediateka", path: "#" },
  { title: "Популярные фильмы", path: "#" },
  { title: "Фильмы Иви", path: "#" },
];

export const HeaderDropdown: FC = () => (
  <div className={styles.headerDropdown}>
    <div className={styles.block}>
      <div className={styles.column}>
        <h5 className={styles.title}>Жанры</h5>
        <ul className={cn(styles.list, styles.list_country)}>
          {genres.map(({ path, title }) => (
            <li key={path}>
              <Link href={path} className={styles.link}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.column}>
        <h5 className={styles.title}>Страны</h5>
        <ul className={styles.list}>
          {country.map(({ path, title }) => (
            <li key={path}>
              <Link href={path} className={styles.link}>
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <h5 className={styles.title}>Годы</h5>
        <ul className={styles.list}>
          {years.map(({ path, title }) => (
            <li key={path}>
              <Link href={path} className={styles.link}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className={styles.block}>
      <div className={styles.collection}>
        {collection.map(({ path, title }) => (
          <Link key={title} href={path} className={styles.link}>
            {title}
          </Link>
        ))}
      </div>
    </div>
    <div className={styles.block}></div>
  </div>
);
