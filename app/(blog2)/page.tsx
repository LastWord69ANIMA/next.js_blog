import PocketBase from 'pocketbase';
import Link from 'next/link';
import CreateNote from './CreateNote';
import Image from 'next/image'
import styles from './page.module.css'
import { Button, Flex, Heading, Input, position, useColorMode, useColorModeValue} from "@chakra-ui/react";



 export const dynamic = 'auto',
   dynamicParams = true,
   revalidate = 0,
   fetchCache = 'auto',
   runtime = 'nodejs',
   preferredRegion = 'auto'


async function getBlogs() {
  const db = new PocketBase('http://127.0.0.1:8090');
   const data = await db.records.getList('notes');
  //const res = await fetch('http://127.0.0.1:8090/api/collections/blogs/records?page=1&perPage=30', { cache: 'no-store' });
  //const data = await res.json();
  return data?.items as any[];
}

export default async function BlogsPage() {

    const GoToGithub = () => {
        return (
          <Link href="https://github.com/LastWord69ANIMA"
          >
            <Image
                src={"/github-icon.svg"}
                alt={"Picture of Github"}
                width={50}
                height={50}
            ></Image>
          </Link>
        )
    }

    const Header  = () => {
        return(
            <header className={styles.header}>
            <Link
                href="/"
                
            >
                <h1>
                    家
                </h1>
            </Link>

            <Link
                href="/blog"
            >
                <h1>
                    事
                </h1>
            </Link>

            <Link
                href="/profile"
            >
                <h1>
                    自
                </h1>
            </Link>

            <Link 
                href="/contact"
            >
                <h1>
                    問
                </h1>
            </Link>
        </header>
        )
    }

    const Footer = () => {
        return(
            <footer className={styles.footer}>
            <GoToGithub />
            <p>Copyright ©Lastword69ANIMA ※著作権はありませんが、一応ここに記録。</p>
        </footer>
        )
    }

    const blogs = await getBlogs();

  return(
    <div
        className={styles.Isometric}
        >
        <Header />

        <h1>Blogs</h1>
      <div className={styles.grid}>
        {blogs?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>

      <CreateNote />
      <Footer />
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}