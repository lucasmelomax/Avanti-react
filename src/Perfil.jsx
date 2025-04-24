import React from "react";
import git from "./img/git.png";
import styles from "./Perfil.module.css";
import Input from "./Form/Input";
import Card from "./Card";

const Perfil = () => {
  const [value, setValue] = React.useState("");
  const [data, setData] = React.useState("");
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  function handleChange(e){
    setValue(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    fetchDados();
  }

//   React.useEffect(()=>{
//     if(error) fetchDados();
//   },[data])

  async function fetchDados(){
    try{
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${value}`);
        const json = await response.json();
        console.log(json);
        setData(json);
        if(json.status === '404'){
            setError('Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente')
        }
    }
    catch(erro){
        setError('Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente')
    }
    finally{
        setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.titulo}>
        <img src={git} alt="logo" />
        <h1>
          Perfil <span className={styles.bold}>GitHub</span>
        </h1>
      </div>
      <form onSubmit={handleSubmit} className={styles.input}>
        <Input
          type="text"
          name="username"
          placeholder="Digite um usuário do Github"
          value={value}
          data={data}
          onChange={handleChange}
        />
      </form>
      {data && <Card data={data} error={error} {...data} />}
      
    </div>
  );
};

export default Perfil;
