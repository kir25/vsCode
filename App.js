import React, {
  useState,
  useEffect,
  useContext,
  Fragment,
  useRef
} from "react";

// const scaleNames = {
//     c: 'Цельсия',
//     f: 'Фаренгейта'
// };
// const Verdict = (props) => {
//     if (props.cels > 100) {
//         return (
//             <h1>Water is boilll</h1>
//         )
//     } else {
//         return (
//             <h1>Water isn't boil</h1>
//         )
//     }
// }
// class TemperatureInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: ''
//         }
//     }
//     handleInputChange = ({ target: { value } }) => {
//         this.setState({
//             value
//         })
//     }
//     render() {
//         let temp = this.state.value
//         let scale = this.props.scale
//         return (
//             <fieldset>
//                 <legend>Input the temperature in {scaleNames[scale]} please:</legend>
//                 <input value={temp} onChange={this.handleInputChange} />
//                 {temp && <Verdict cels={temp} />}
//             </fieldset>
//         )
//     }
// }
/////////////////////////////////////Hook
// function Input() {
//     const [name, setName] = useState("Mary");
//     function handleInputChange(e) {
//         setName(e.target.value)
//     }
//     return (
//         <input value={name} onChange={handleInputChange} />
//     )
// }

// function Example() {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         document.title = `You clicked ${count} times`
//     })
//     return (
//         <>
//             <div>
//                 <p>You click {count} times</p>
//                 <button onClick={() => setCount(count + 1)}>
//                     Click me
//             </button>
//             </div>
//             <Input />
//         </>
//     )
// }
// export default Example;
////////////////////////////////////////////////////////////
// function useFriendStatus(friendId) {
//     const [isOnline, setIsOnline] = useState(null);

//     function handleStatusChange(status) {
//         setIsOnline(status.isOnline)
//     }

//     useEffect(() => {
//         ChatAPI.subscribeToFriendStatus(friendId, handleStatusChange)
//         return () => {
//             ChatAPI.unsubscribeToFriendStatus(friendId, handleStatusChange)
//         }
//     })

// }
// function FriendStatus(props) {
//     const isOnline = useFriendStatus(props.friend.id)
//     if (isOnline === null) {
//         return 'Loading...'
//     }
//     return isOnline ? 'Online' : "Offline"
// }

// function FriendListItem(props) {
//     const isOnline = useFriendStatus(props.friend.id);
//     return (
//         <li style={{ color: isOnline ? 'green' : 'balck' }}>
//             {props.friend.name}
//         </li>
//     )
// }

////////////////////////////////////////////////////////////HOC
// class CommentList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             comment: DataSourse.getComments()
//         }
//     }
//     handleChange = () => {
//         this.setState({
//             comment: DataSourse.getComments()
//         })
//     }
//     componentDidMount() {
//         DataSourse.addEventListener(this.handleChange)
//     }
//     componentWillUnmount() {
//         DataSourse.removeEventListener(this.handleChange)
//     }
//     render() {
//         let { comment } = this.state
//         return (
//             <div>
//                 {comment.map((it, id) => (<Comment com={it} key={id} />
//                 ))}
//             </div>
//         )
//     }
// }

// const CommentListWithSubscription = withSubscription(
//     CommentList,
//     (DataSourse) => DataSourse.getComments();
// )

// const BlogPostWithSubscription = withSubscription(
//     BlogPost,
//     (DataSourse, props) => DataSourse.getComments(props.id)
// )
////////////////////////////////////////////////////////////////////////////////////////render-props
// class Cat extends React.Component {
//     render() {
//         const mouse = this.props.mouse;
//         return (
//             <img src='/cat.jpg'  alt='cat'  style={{position:'absolute',left:mouse.x,top:mouse.y}}/>

//         )
//     }
// }
// class Mouse extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             x: 0,
//             y: 0
//         }
//     }
//     handlerMouse = (e) => {
//         this.setState({
//             x: e.clientX,
//             y: e.clientY
//         })
//     }

//     render() {
//         return (
//             <div style={{ height: '100%' }} onMouseMove={this.handlerMouse}>
//                {this.props.res(this.state)}
//             </div>
//         )
//     }
// }

// class MouseTracker extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>Move the cursor</h1>
//                 <Mouse res={sol=>(
//                     <Cat mouse={sol}/>
//                 )}/>
//             </div>
//         )
//     }
// }
// export { MouseTracker };
////////////////////////////////////////////////////////////HOOK
// const friendList = [
//     { id: 1, name: 'Phoebe' },
//     { id: 2, name: 'Rachel' },
//     { id: 3, name: 'Ross' },
// ];
// function ChatRecipientPicker() {
//     const [recipientID, setRecipientID] = useState(1);
//     const isRecipientOnline = useFriendStatus(recipientID);
//     return (
//         <>
//             <Circle color={isRecipientOnline?'green':'red'}/>
//             <select value={recipientID}
//             onChange={e=>setRecipientID(Number(e.target.value))}>
//                 {friendList.map(friend=>(
//                     <option key={friend.id} value={friend.id}>
//                         {friend.name}
//                     </option>
//                 ))}
//             </select>
//         </>
//                 )
//             }
// class Score extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: {},
//       score: 0
//     };
//   }

//   componentDidMount() {
//     const ff = async () => {
//       let rez = await fetch(
//         "https://hn.algolia.com/api/v1/search?query=Redux&page=0"
//       );
//       let response = await rez.json();
//       this.setState({ value: response });
//     };
//     ff();
//   }
//   //   handleClick = () => {
//   //     this.setState(curstate => ({
//   //       score: curstate.score + 1
//   //     }));
//   //   };
//   componentDidUpdate(prevProps) {
//     if (this.props.item !== prevProps.item) {
//       const ff = async () => {
//         let rez = await fetch(
//           "https://hn.algolia.com/api/v1/search?query=Redux&page=1"
//         );
//         let response = await rez.json();
//         this.setState({ value: response });
//       };
//       ff();
//     }
//   }
//   render() {
//     let { score } = this.state;
//     let { item } = this.props;
//     // console.log(this.props.item);
//     return (
//       <div>
//         <h1>Robin's age is {item}</h1>
//         <button onClick={this.handleClick}>Click me!!!!!</button>
//         {/* <ScoreHook /> */}
//       </div>
//     );
//   }
// }
export const Father = () => {
  let [val, setVal] = useState(0);
  return (
    <>
      <h1>Farher Robin's age is {val}</h1>
      <button onClick={() => setVal(val + 1)}>Change age</button>
      <ScoreHook age={val} />;
    </>
  );
};

function ScoreHook(props) {
  const [score, setScore] = useState(0);
  const [obj, setObj] = useState({});
  const [id, setId] = useState(false);

  useEffect(() => {
    const ff = async () => {
      let rez = await fetch(
        `https://hn.algolia.com/api/v1/search?query=redux&page=${props.age}`
      );
      let response = await rez.json();
      setObj(response);
    };
    ff();
  }, [props.age]);
  console.log(obj.hits);
  function handleSortId() {
    let newarr = Object.assign({}, obj);
    if (!id) {
      newarr.hits.sort((a, b) => a.objectID - b.objectID);
      setObj(newarr);
      setId(true);
    } else {
      newarr.hits.reverse();
      setObj(newarr);
      setId(false);
    }
    console.log(id);
  }
  function handleSortAut() {
    let newarr = Object.assign({}, obj);
    if (!id) {
      newarr.hits.sort((a, b) => {
        if (a.author < b.author) return -1;
        if (a.author > b.author) return 1;
        return 0;
      });
      setObj(newarr);
      setId(true);
    } else {
      newarr.hits.reverse();
      setObj(newarr);
      setId(false);
    }
    console.log(id);
  }
  return (
    <div>
      <h1>HelloHook {score}</h1>
      <h1>Robin's age is {props.age}</h1>
      <button onClick={() => setScore(score + 1)}>Click me!!!!!</button>
      {obj.hits && (
        <table>
          <thead>
            <tr>
              <th onClick={handleSortId}>ID</th>
              <th onClick={handleSortAut}>Author</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {obj.hits.map(({ author, objectID, title }) => (
              <tr key={objectID}>
                <td>{objectID}</td>
                <td>{author}</td>
                <td>{title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
///////////////////////////////////////////////////////////
export default function App() {
  const [obj, setObj] = useState([]);
  const [but, setBut] = useState(false);
  useEffect(() => {
    const ff = async () => {
      let rez = await fetch(
        `https://hn.algolia.com/api/v1/search?query=redux&page=0`
      );
      let response = await rez.json();
      setObj(response.hits);
    };
    ff();
    console.log("Mount");
  }, []);

  function onChange() {
    setBut(!but);
  }
  return (
    <>
      <button onClick={onChange}>Click me</button>
      <ArticleList artlist={but ? obj : obj.slice().reverse()} />
    </>
  );
}

function ArticleList(props) {
  let [col, setCol] = useState(null);
  let { artlist } = props;
  function handleClick(col) {
    setCol(col);
    console.log("Hy");
  }
  return (
    <div>
      <h1>Hello</h1>
      {artlist && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Author</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {artlist.map(({ objectID, author, title }) => (
              <Article
                objectID={objectID}
                author={author}
                title={title}
                open={col === objectID}
                key={objectID}
                onClick={() => handleClick(objectID)}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

function Article({ author, title, objectID, open, onClick }) {
  // let [col, setCol] = useState(open);
  // useEffect(() => {
  //   setCol(open);
  //   console.log("Update");
  // }, [open]);
  return (
    <tr style={{ background: open ? "grey" : "white" }} onClick={onClick}>
      <td>{objectID}</td>
      <td>{author}</td>
      <td>{title}</td>
    </tr>
  );
}
/////////////////////////////////////////////////////////////
export class NewApp extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: 0
  //   };
  // }
  state = { value: 0 };
  handleClick = () => {
    this.setState(curstate => ({
      value: curstate.value + 1
    }));
  };
  render() {
    let { value } = this.state;
    console.log(value);
    return (
      <>
        <button onClick={this.handleClick}>Clicl it</button>
        <Children counter={value} />
      </>
    );
  }
}

class Children extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.counter
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.count !== nextProps.counter) {
      console.log(`${nextProps.counter} getDer`);
      console.log(`${prevState.count} state`);
      return { count: nextProps.counter };
    }
    return null;
  }
  render() {
    console.log(`${this.props.counter} after render`);
    console.log(`${this.state.count} state`);
    let { count } = this.state;
    return <h1>Hello: {count} </h1>;
  }
}

// const Name = React.createContext("Robin");
// export function ProApp() {
//   return <Toolbar />;
// }

// function Toolbar() {
//   return <ThemeBut />;
// }

// function ThemeBut() {
//   // static contextType = Theme;
//   let value = useContext(Name);
//   return <Button name={value} />;
// }

// function Button(props) {
//   return <h1>Hello {props.name}</h1>;
// }

// export function Hokage() {
//   return <Narut val={3} />;
// }
export class Narut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 20,
      name: "Robin"
    };
  }
  handleClick = () => {
    this.setState({
      age: 25
    });
    this.setState(state => ({
      age: state.age + 10
    }));
  };
  // componentDidMount() {
  //   this.setState(
  //     (state, props) => ({
  //       age: state.age + props.val
  //     }),
  //     () => console.log("callback")
  //   );
  // }
  render() {
    console.log("rener");
    let { age, name } = this.state;
    return (
      <>
        <button onClick={this.handleClick}>Click me</button>
        <h1>
          {name} is {age} years
        </h1>
      </>
    );
  }
}
///////////////////////////////////////////////////////
// export function List() {
//   let [revert, setRevert] = useState(false);
//   let list = [
//     {
//       name: "Robin",
//       id: 17,
//       info: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
//     placeat iste enim illo harum nihil quod nobis delectus voluptas aspernatur!`
//     },
//     {
//       name: "Rob",
//       id: 19,
//       info: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
//     placeat iste enim illo harum nihil quod nobis delectus voluptas aspernatur!`
//     },
//     {
//       name: "Mary",
//       id: 18,
//       info: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
//     placeat iste enim illo harum nihil quod nobis delectus voluptas aspernatur!`
//     }
//   ];
//   function change() {
//     setRevert(!revert);
//     console.log(revert);
//   }
//   console.log(revert);
//   let mapList = list;
//   if (revert) {
//     list.unshift({
//       name: "Mar",
//       id: 188,
//       info: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
//     placeat iste enim illo harum nihil quod nobis delectus voluptas aspernatur!`
//     });
//   }
//   // let mapList = revert ? list. : list;
//   return (
//     <>
//       <button onClick={change}>Click it</button>
//       <ul>
//         {mapList.map(({ name, id, info }, idd) => (
//           <Item key={id} name={name} info={info} idx={id} />
//         ))}
//       </ul>
//     </>
//   );
// }
// function Item({ name, info, idx }) {
//   console.log("render");
//   return (
//     <>
//       <li>
//         <h1>{name}</h1>
//         <p>
//           {idx}
//           {info}
//         </p>
//       </li>
//     </>
//   );
// }
///////////////////////////////////////////////////
export function Width() {
  let [show, setHide] = useState(false);
  const name = useInput("Mary");
  const surname = useInput("Poppins");

  let width = useWidthComp();

  function handleClick() {
    setHide(!show);
  }

  return (
    <>
      <input {...name} />
      <br />
      <input {...surname} />
      <h1>
        {name.value} {surname.value}
      </h1>
      <h1>Width of the window is-{width}</h1>
      <h1>componentWillUnmount </h1>
      <button onClick={handleClick}>Click to show</button>
      {show && <Child />}
    </>
  );
}

function Child() {
  const [textVal, setText] = useState("Unmounting");
  useTitle(textVal);
  return <h2>Children Component</h2>;
}

function useInput(initialVal) {
  const [value, setVal] = useState(initialVal);
  function handleChange({ target: { value } }) {
    setVal(value);
  }
  return {
    value,
    onChange: handleChange
  };
}

function useTitle(text) {
  useEffect(() => {
    return () => console.log(text);
  });
}

function useWidthComp() {
  let [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const resizeWindow = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeWindow);
    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  });
  return width;
}

/////////////////////////////////////////////Ref
const MyContext = React.createContext("Mary");
export class MyRef extends React.Component {
  state = {
    Kirill: "",
    h1val: ""
  };
  // inputRef_1 = React.createRef();
  // inputRef_2 = React.createRef();
  // inputRef_3 = React.createRef();
  // h1Ref = React.createRef();

  // componentDidMount() {
  //   this.setState({ h1val: this.h1Ref.current.textContent });
  // }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    let { Kirill, Mary, Robin, h1val } = this.state;
    return (
      <>
        <Rebenok surname="Bubnov" />
        <MyContext.Consumer>
          {value => <h2>It's also me {value}</h2>}
        </MyContext.Consumer>
        <input
          type="text"
          // ref={this.inputRef_1}
          onChange={this.handleChange}
          value={Kirill}
          name="Kirill"
        />
        <input
          type="text"
          // ref={this.inputRef_2}
          onChange={this.handleChange}
          value={Mary}
          name="Mary"
        />
        <input
          type="text"
          // ref={this.inputRef_3}
          onChange={this.handleChange}
          //value={Robin}
          name="Robin"
        />
        <h1 ref={this.h1Ref}>Robin</h1>
        <h1>Hy {Kirill}</h1>
        <h1>Hy {Mary}</h1>
        <h1>Hy {Robin}</h1>
        <h1>Hy {h1val}</h1>
      </>
    );
  }
}

class Rebenok extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  static contextType = MyContext;
  render() {
    return (
      <h2>
        Hy, my name is {this.context} and my surname is {this.props.surname}
      </h2>
    );
  }
}
////////////////////////////////////////////Hookref
export function HookRef() {
  const inputEl = useRef(null);
  const cont = useContext(MyContext);
  const [name, setName] = useState("");
  const h1El = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
    setName(h1El.current.textContent);
  };

  return (
    <>
      <MyContext.Consumer>
        {value => <h2>It's also me {value}</h2>}
      </MyContext.Consumer>
      <h1 ref={h1El}>Robin</h1>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Install focus</button>
      <h1>Hello {name}</h1>
      <h2>Hello {cont}</h2>
    </>
  );
}
