import logo from './logo.svg';
import './App.css';
import gladiador from './assets/imagenes/Gladiator.jpg';
import lacosa from './assets/imagenes/lacose.jpg';
import naufrago from './assets/imagenes/Náugrago.jpg';
import futuro from './assets/imagenes/future.jpg';
import bella from './assets/imagenes/LA-VIDA-ES-BELLA-2.jpg';
import vaqueros from './assets/imagenes/293020.JPG';
import feis from './assets/imagenes/face.png';
import insta from './assets/imagenes/ins.png';
import tw from './assets/imagenes/twitter icon.png';


function App() {
  return (
    <div>
      
      
    
      <h1 > RETROCINE </h1>

       
      
      <section className='menu'>
      
      <a href=" c:\Users\Ivan_\OneDrive\Escritorio\MI 1RA PAGINA WEB\index.html  " class="menu">Inicio</a>
      <a href="https://ww1.cuevana3.me/peliculas-mas-vistas" class="menu">Peliculas</a>
      <a href="https://ww1.cuevana3.me/serie" class="menu">Series</a>
      <a href="https://ww1.cuevana3.me/estrenos" class="menu">Reestrenos</a>
      <a href="#" class="menu">Nosotros</a>
      
      
      </section>

      
      <h2 > Peliculas aclamadas </h2>

        

      
   
      <section className='sinopsis'>

               < img  src={gladiador} width="250"/>
      <p> 
           
           <strong>Gladiator (2000):</strong> El general romano Máximo es el soporte más leal del emperador Marco Aurelio, que lo ha conducido de victoria en victoria. Sin embargo, Cómodo, el hijo de Marco Aurelio, está celoso del prestigio de Máximo y aún más del amor que su padre siente por él. Cuando Cómodo llega al poder ordena el arresto del general y su asesinato. Máximo escapa de sus asesinos, pero no puede evitar la muerte de su familia. Entonces se convierte en gladiador para llevar a cabo su venganza.   <section className='resena'>
           <a href='https://www.imdb.com/title/tt0172495/?ref_=nv_sr_srsg_0'><strong> ver reseña</strong> </a></section></p> 

           < img  src={lacosa} width="250"/>

      <p>  
           <strong>The thing (1982) :</strong> En una remota zona de la Antártida, un descubrimiento de gran relevancia científica se convierte en un problema de supervivencia. La paleontóloga Kate Lloyd (Mary Elizabeth Winstead) llega a esa inhóspita región para colaborar con un equipo científico noruego que ha encontrado una nave extraterrestre enterrada en el hielo, en cuyo interior hay un ser alienígena congelado pero cuyas células están vivas... Precuela de "La Cosa", película dirigida por John Carpenter y protagonizada por Kurt Russell, que se basaba en un clásico de serie B de los años 50.  <section className='resena'>
           <a href='    https://www.imdb.com/title/tt0084787/?ref_=fn_al_tt_1     '><strong> ver reseña</strong> </a>
           </section> </p>
      
           </section>
          
          <section className='sinopsis'>

            
          < img  src={naufrago} width="250"/>


           <p>
                  <strong>Náufrago (2000):</strong> Acostumbrado a manejarse en un mundo hipertecnificado, al sometimiento a un frenético calendario de trabajo que le lleva a desplazarse por numerosos puntos del planeta, Chuck Noland, ingeniero de sistemas de profesión, sobrevive a un accidente de avión en una zona indeterminada del Pacífico. <section className='resena'>
           <a href='https://www.imdb.com/title/tt0162222/?ref_=nv_sr_srsg_2'><strong> ver reseña</strong> </a></section></p>


                  < img  src={futuro} width="250"/>
                  <p>
                    <strong>Volver al Futuro Parte II (1989) :</strong> Aunque a Marty McFly todavía le falta tiempo para asimilar el hecho de estar viviendo dentro de la familia perfecta gracias a su anterior viaje en el tiempo, no le queda ni espacio para respirar cuando su amigo Doc aparece de improviso con la máquina del tiempo (mucho más modernizada), e insta a que le acompañen él y su novia a viajar al futuro para solucionar un problema con la ley que tendrá uno de sus futuros hijos.. <section className='resena'>
           <a href='https://www.imdb.com/title/tt0096874/?ref_=nv_sr_srsg_3'><strong> ver reseña</strong> </a></section>
            </p>

      </section>

       <section className='sinopsis'>

       < img  src={bella} width="250"/>

       <p> <strong>La vida es bella (1997):</strong> En 1939, a punto de estallar la Segunda Guerra Mundial, Guido llega a Arezzo con la intención de abrir una librería. Allí conoce a Dora y, a pesar de que está prometida con el fascista Rodolfo, acaba casándose con ella y tienen un hijo. Poco después de estallar la guerra, las tropas nazis llegan a Italia y los tres son internados en un campo de concentración. Allí, Guido construye una elaborada fantasía para proteger a su hijo y hacerle creer que la situación es tan solo un juego. <section className='resena'>
           <a href='https://www.imdb.com/title/tt0118799/?ref_=nv_sr_srsg_1'><strong> ver reseña</strong> </a></section></p>



       < img  src={vaqueros} width="250"/>

       <p> <strong>El bueno, el feo y el malo (1966) :</strong> La trama de El bueno, el feo y el malo tiene lugar durante la Guerra de Secesión. Tres truhanes buscan un tesoro oculto. Ninguno puede localizarlo sin los otros, pues cada uno tiene parte de la información de su paradero. Tuco y “El Rubio” son dos truhanes con cierto sentido moral, mientras que “Sentencia” es un malvado que no duda en matar para conseguir sus objetivos. <section className='resena'>
           <a href='https://www.imdb.com/title/tt0060196/?ref_=nv_sr_srsg_0'><strong> ver reseña</strong> </a></section></p>



        </section>




             <section className="redes">

             <a href="  https://www.facebook.com/retrocyt/ ">  < img  src={feis} width="30"/></a>
            
            <a href='  https://www.instagram.com/retrocine/  '>< img  src={insta} width="30"/></a> 

            <a href='  https://twitter.com/RetroCine2  '> < img  src={tw} width="30"/> </a>

             </section>



        <h4>© 2022 RetroCine Peliculas Online, Todos los derechos reservados.</h4>

    </div>



  );


}

export default App;
