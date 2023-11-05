function About() {
  // // test
  // const AboutUs = () => {
  //   const teamMembers = [
  //     {
  //       name: 'Jun Hyun (Andrew) Park',
  //       description: 'Jun Hyun is a first-year majoring in computer science who works on the software subteam for the Balloon Team. In his free time, he likes to play ping pong, basketball, and eat GOOD FOOD.',
  //       imageUrl: '/logopictures/junhyunparkheadshot.png',
  //       linkedInUrl: 'https://www.linkedin.com/',
  //     },
  //     {
  //       name: 'Member Name',
  //       description: 'Member Description',
  //       imageUrl:' path/to/image',
  //       linkedInUrl: 'https://www.linkedin.com/',
  //     },
  //   ];
  // }

  return (
    <div>
      <h1>About Us</h1>
      <p>We are the Penn Aerospace Club Balloon Team!</p>
      {/* <div>
        {teamMembers.map(member => ( // loops over every elt of teamMembers and creates a new MemberProfile
          <MemberProfile key={member.name} {...member} />
        ))}
      </div> */}
    </div>
  );
}

export default About;
