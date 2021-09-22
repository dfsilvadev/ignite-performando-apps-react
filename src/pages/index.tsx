import Head from "next/head";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { SearchResults } from "../components/SearchResults";
import styles from "../styles/Home.module.css";

interface Product {
  id: number;
  price: number;
  title: string;
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Product[]>([]);

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    setResults(data);
  }

  return (
    <div>
      <Head>
        <title>Performando apps com Reactjs</title>
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>Performando apps com Reactjs</p>
        <h1>Search app</h1>

        <form onSubmit={handleSearch} className={styles.card}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </form>

        <SearchResults results={results} />
      </main>
    </div>
  );
}
