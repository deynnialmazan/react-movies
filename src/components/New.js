import { useForm } from 'react-hook-form';
import { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';

function New() {
    const [successMsg, setSuccessMsg] = useState("");

    const { register, handleSubmit, reset, setFocus, formState: { errors, isValid } } = useForm({
        mode: 'onChange'
      });

    const onSubmit = (data) => {
        console.log(data);
        setSuccessMsg("New movie added sucessfully!");
        reset();
    };

    useEffect(() => {
        setFocus("title");
    }, [setFocus]);

    const validateLink = (value) => {
        try {
          new URL(value);
          return true;
        } catch {
          return 'Invalid hyperlink.';
        }
      };

  return (
    <section className='hook-form'>
        <Helmet>
          <title>New movie</title>
        </Helmet>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>New movie</h3>
            <div>
                <input type='text' placeholder="Title" name="title" 
                     {...register("title", { required: "Title is required" })}  />
                 <div className='message'>
                    {errors.title&& <p className="message" role="alert">{errors.title?.message}</p>}
                </div>
            </div>

            <div className='row-input'>
                <div>
                    <input type="number" placeholder="Year" name="year" className='year-input'
                        {...register("year", { required: 'Year is required.' })}
                        min="1920"
                        max="2023"
                    />
                    <div className='message'>
                        {errors.year &&  <p className="message" role="alert">{errors.year?.message}</p>}
                    </div>
                </div>
                <div>
                    <input type="text" placeholder="Running time" name="running" className='running-input'
                        {...register("running", { required: "Running is required" })}  />
                    <div className='message'>
                        {errors.running&& <p className="message" role="alert">{errors.running?.message}</p>}
                    </div>
                </div>
            </div>
            
            <div>
                <input type='text' placeholder="Description" name="description" className='description-input' 
                     {...register("description", { required: "Description is required" })}  />
                 <div className='message'>
                    {errors.description&& <p className="message" role="alert">{errors.description?.message}</p>}
                </div> 
            </div>
           <div>
                <input type='text' placeholder="Genre" name="genre"  
                     {...register("genre", { required: "Genre is required" })}  />
                 <div className='message'>
                    {errors.genre&& <p className="message" role="alert">{errors.genre?.message}</p>}
                </div> 
            </div>
            <div>
                <input type='text' placeholder="Poster" name="poster"  
                     {...register("poster", { 
                        required: "Poster is required",
                        validate: validateLink })}  />
                 <div className='message'>
                    {errors.poster&& <p className="message" role="alert">{errors.poster?.message}</p>}
                </div> 
            </div>
            <div>
                <input type='text' placeholder="Slug" name="slug"  
                     {...register("slug", { 
                        required: "Slug is required",
                        pattern: {
                            value:/^[a-z0-9-]+$/,
                            message: "Enter a valid slug (lowercase, without spaces" }
                        })} />
                 <div className='message'>
                    {errors.slug&& <p className="message" role="alert">{errors.slug?.message}</p>}
                </div> 
            </div>
            <div className='message'>
                {successMsg && <p className="success-msg">{successMsg}</p>}
            </div>
            <div className='button'>
                <input type='submit' value="Submit" className='submit' />
            </div>   
        </form>
    </section>
  )
};

export default New;