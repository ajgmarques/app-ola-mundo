import styles from './Post.module.css'
import { useParams, useNavigate } from 'react-router-dom';
import posts from 'json/posts.json';
import PostModelo from 'components/PostModelo';
import ReactMarkdown from 'react-markdown';
import NaoEncontrada from 'paginas/NaoEncontrada';
import PaginaPadrao from 'components/PaginaPadrao';
import BotaoPrincipal from 'components/BotaoPrincipal';
import PostCard from 'components/PostCard';

export default function Post() {
  const parametros = useParams();

  const navegar = useNavigate();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <NaoEncontrada />
  }

  const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4)

  console.log(postsRecomendados)

  return (
    <PaginaPadrao>
      <PostModelo
        fotoCapa={`/assets/posts/${post.id}/capa.png`}
        titulo={post.titulo}
      >
        <div className={styles.postMarkdownContainer}>
          <ReactMarkdown>
            {post.texto}
          </ReactMarkdown>
          <div
            className={styles.botaoContainer}
            onClick={() => navegar(-1)}
          >
            <BotaoPrincipal tamanho="lg" >Inicio</BotaoPrincipal>
          </div>
        </div>

        <h2 className={styles.tituloOutrosPosts}>
          Outros posts que você pode gostar:
        </h2>

        <ul className={styles.postsRecomendados}>
          {postsRecomendados.map((post) => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>



      </PostModelo>
    </PaginaPadrao>
  );
}
