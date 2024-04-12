import './Post.css'
import { useParams, useNavigate } from 'react-router-dom';
import posts from 'json/posts.json';
import PostModelo from 'components/PostModelo';
import ReactMarkdown from 'react-markdown';
import NaoEncontrada from 'paginas/NaoEncontrada';
import PaginaPadrao from 'components/PaginaPadrao';
import BotaoPrincipal from 'components/BotaoPrincipal';

export default function Post() {
  const parametros = useParams();

  const navegar = useNavigate();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <NaoEncontrada />
  }

  return (
    <PaginaPadrao>
      <PostModelo
        fotoCapa={`/assets/posts/${post.id}/capa.png`}
        titulo={post.titulo}
      >
        <div className="post-markdown-container">
          <ReactMarkdown>
            {post.texto}
          </ReactMarkdown>
          <div
            className="botaoContainer"
            onClick={() => navegar(-1)}
          >
            <BotaoPrincipal tamanho="lg" >Inicio</BotaoPrincipal>
          </div>


        </div>
      </PostModelo>
    </PaginaPadrao>
  );
}
