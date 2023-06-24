import { AiFillGithub } from 'react-icons/ai';
import { WindupChildren, Pace, CharWrapper } from 'windups';
import {
	SiCodewars,
	SiFreecodecamp,
	SiLinkedin,
	SiGmail,
} from 'react-icons/si';

export const AboutAnimation = ({ children }) => {
	return <span className='about-animation'>{children}</span>;
};

const About = () => {
	return (
		<div
			className='card border-dark bg-dark mx-auto shadow-lg '
			style={{ top: 80, borderRadius: 13, width: 700 }}
		>
			<div className='card-header h4' style={{ fontFamily: 'orbit' }}>
				About
			</div>
			<div className='card-body'>
				<CharWrapper element={AboutAnimation}>
					<WindupChildren>
						<Pace ms={10}>
							<blockquote className='blockquote mb-0 text-start'>
								<p>
									This is a test project according to the terms of reference.
								</p>
								<footer className='blockquote-footer'>
									You can view my resume{' '}
									<span style={{ opacity: '85%' }}>
										<a href='https://www.figma.com/proto/ZzsyC3NcZRnE55dJREbLLa/general_resume_rus?node-id=31-3'>
											here
										</a>
									</span>
								</footer>
								<div className='d-flex gap-4 h3'>
									<p className='h5 pt-2'>More about me:</p>
									<a className='link-secondary' href='https://github.com/mi1sh'>
										<AiFillGithub title='gitHub' />
									</a>
									<a
										className='link-secondary'
										href='https://www.codewars.com/users/droch1la'
									>
										<SiCodewars title='codewars' />
									</a>
									<a
										className='link-secondary'
										href='https://www.freecodecamp.org/mishshim'
									>
										<SiFreecodecamp title='freeCodeCamp' />
									</a>
									<a
										className='link-secondary'
										href='https://www.linkedin.com/in/mi1sh/'
									>
										<SiLinkedin title='LinkedIn' />
									</a>
									<a
										className='link-secondary'
										href='mailto:mikhail.pelt@gmail.com'
									>
										<SiGmail title='mail to' />
									</a>
								</div>
							</blockquote>
						</Pace>
					</WindupChildren>
				</CharWrapper>
			</div>
		</div>
	);
};

export default About;
