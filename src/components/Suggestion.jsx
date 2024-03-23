const Suggestion = () => {
  return (
    <form
      action=""
      className="flex flex-col w-1/2 p-4 m-auto space-y-6 bg-black border border-white shadow-2xl"
    >
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-2 text-white">
          Email
        </label>
        <input
          type="email"
          className="p-2 rounded-sm"
          placeholder="email@example.com"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="mb-2 text-white">
          Suggestion
        </label>
        <textarea
          name="suggestion"
          id="suggestion"
          cols="30"
          rows="10"
          placeholder="Message ..."
          className="p-2 rounded-sm h-36"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-2 mt-4 font-semibold bg-white rounded-sm text-start w-fit"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Suggestion;
