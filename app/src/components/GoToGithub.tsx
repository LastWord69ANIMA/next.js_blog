import Image from 'next/image'
import Link from 'next/link';

const GoToGithub = () => {
    return (
      <Link href={"https://github.com/LastWord69ANIMA"}
      target={"_blank"}
      >
        <Image
            src={"/github-icon.svg"}
            alt={"Picture of Github"}
            width={50}
            height={100}
        ></Image>
      </Link>
    )
}

export default GoToGithub;