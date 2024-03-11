export default function Page() {
  return (
    <form action="/my-handling-form-page" method="post">
      <ul>
        <li>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="user_name" value={"Abhinav"} />
        </li>
        <li>
          <label htmlFor="mail">Email: </label>
          <input
            type="email"
            id="mail"
            name="user_email"
            value={"abhinav@gmail.com"}
          />
        </li>
        <li>
          <label htmlFor="msg">Message: </label>
          <textarea
            id="msg"
            name="user_message"
            value={"Hello, How are you?"}
          ></textarea>
        </li>
        <li className="button">
          <button type="submit">Send your message</button>
        </li>
      </ul>
    </form>
  );
}
