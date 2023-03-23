import React from 'react';
import Head from 'next/head';
import { Barlow_Semi_Condensed } from 'next/font/google';

const barlowSemiCondensed = Barlow_Semi_Condensed({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});

const list = [
	{
		id: '1',
		name: 'Daniel Clifford',
		title: 'Verified Graduate',
		largeText: `I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.`,
		smallText: `"I was an EMT for many years before I joined the bootcamp. I've
		been looking to make a transition and have heard some people who
		had an amazing experience here. I signed up for the free intro
		course and found it incredibly fun! I enrolled shortly
		thereafter. The next 12 weeks was the best - and most grueling -
		time of my life. Since completing the course, I've successfully
		switched careers, working as a Software Engineer at a VR
		startup. Lorem ipsum dolor sit amet consectetur adipisicing
		elit. Ratione vero repudiandae, quasi atque officiis eum
		consectetur odio amet dolorem deleniti repellat expedita aut
		sunt laudantium cum itaque nam voluptatum quod! Quo totam sequi
		omnis deserunt? Sit nam molestiae excepturi, perspiciatis labore
		deleniti eum, eligendi quisquam quod sed nobis exercitationem
		tempora! "`,
		quote: true,
		image: '/assets/image-daniel.jpeg',
		styles: 'bg-purple-700 text-white md:col-span-2',
	},
	{
		id: '2',
		name: 'Jonathan Walters',
		title: 'Verified Graduate',
		largeText: `The team was very supportive and kept me motivated`,
		smallText: `"I started as a total newbie with virtually no coding skills. I now
		work as a mobile engineer for a big company. This was one of the
		best investments I've made in myself. Lorem ipsum dolor sit amet
		consectetur adipisicing elit. Atque ipsam veritatis natus illum
		ullam ab, nesciunt rerum nobis, quibusdam ad voluptatum rem
		necessitatibus facere nihil deleniti assumenda vel velit neque quia,
		nisi ipsum laudantium impedit eveniet iste. Pariatur, exercitationem
		consequuntur praesentium a est eum velit quos maiores ipsum facere
		tempora! "`,
		quote: false,
		image: '/assets/image-jonathan.jpeg',
		styles: 'bg-gray-600 text-white',
	},
	{
		id: '3',
		name: 'Kira Whittle',
		title: 'Verified Graduate',
		largeText: `Such a life-changing experience. Highly recommended!`,
		smallText: `"Before joining the bootcamp, I've never written a line of code. I
		needed some structure from professionals who can help me learn
		programming step by step. I was encouraged to enroll by a former
		student of theirs who can only say wonderful things about the
		program. The entire curriculum and staff did not disappoint. They
		were very hands-on and I never had to wait long for assistance. The
		agile team project, in particular, was outstanding. It took my
		learning to the next level in a way that no tutorial could ever
		have. In fact, I've often referred to it during interviews as an
		example of my developent experience. It certainly helped me land a
		job as a full-stack developer after receiving multiple offers. 100%
		recommend!"`,
		quote: false,
		image: '/assets/image-kira.jpeg',
		styles: 'hidden text-gray-900 bg-white md:block md:row-span-2',
	},
	{
		id: '4',
		name: 'Jeanette Harmon',
		title: 'Verified Graduate',
		largeText: `I An overall wonderful and rewarding experience`,
		smallText: `"Thank you for the wonderful experience! I now have a job I really
		enjoy, and make a good living while doing something I love."`,
		quote: false,
		image: '/assets/image-jeanette.jpeg',
		styles: 'text-gray-900 bg-white',
	},
	{
		id: '5',
		name: 'Patrick Abrams',
		title: 'Verified Graduate',
		largeText: `Awesome teaching support from TAs who did the bootcamp themselves.
		Getting guidance from them and learning from their experiences was
		easy.`,
		smallText: `"The staff seem genuinely concerned about my progress which I find
		really refreshing. The program gave me the confidence necessary to
		be able to go out in the world and present myself as a capable
		junior developer. The standard is above the rest. You will get the
		personal attention you need from an incredible community of smart
		and amazing people."`,
		quote: false,
		image: '/assets/image-patrick.jpeg',
		styles: 'bg-gray-900 md:col-span-2 text-white',
	},
	{
		id: '6',
		name: 'Kira Whittle',
		title: 'Verified Graduate',
		largeText: `Such a life-changing experience. Highly recommended!`,
		smallText: `"Before joining the bootcamp, I've never written a line of code. I
		needed some structure from professionals who can help me learn
		programming step by step. I was encouraged to enroll by a former
		student of theirs who can only say wonderful things about the
		program. The entire curriculum and staff did not disappoint. They
		were very hands-on and I never had to wait long for assistance. The
		agile team project, in particular, was outstanding. It took my
		learning to the next level in a way that no tutorial could ever
		have. In fact, I've often referred to it during interviews as an
		example of my developent experience. It certainly helped me land a
		job as a full-stack developer after receiving multiple offers. 100%
		recommend!"`,
		quote: false,
		image: '/assets/image-kira.jpeg',
		styles: 'text-gray-900 bg-white md:hidden',
	},
];

export default function Grid() {
	return (
		<>
			<Head>
				<title>Grid</title>
			</Head>
			<section
				style={barlowSemiCondensed.style}
				className='bg-gray-200 flex justify-center min-h-screen'
			>
				<div className='max-w-7xl p-2 md:p-10 container'>
					<div className='grid gap-6 grid-cols-1 text-white md:grid-cols-4 md:grid-rows-2'>
						{list.map((listItem) => (
							<div
								key={listItem.id}
								className={`relative p-10 rounded-xl ${listItem.styles}`}
							>
								{listItem.quote && (
									<img
										src='/assets/bg-pattern-quotation.svg'
										alt='icon'
										className='absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150'
									/>
								)}
								<div className='flex z-10 space-x-4'>
									<img
										className='w-10 z-10 h-10 rounded-full ring-2 ring-purple-300'
										src={listItem.image}
										alt={listItem.name}
									/>
									<div className='text-sm'>
										<h4 className='opacity-90'>{listItem.name}</h4>
										<p className='opacity-50'>{listItem.title}</p>
									</div>
								</div>
								<p className='relative z-10 mt-6 text-xl'>
									{listItem.largeText}
								</p>
								<p className='mt-6 opacity-50 line-clamp-6'>
									{listItem.smallText}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
