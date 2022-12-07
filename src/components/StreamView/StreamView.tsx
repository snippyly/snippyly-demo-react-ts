import { SnippylyComments, useSnippylyClient } from '@snippyly/react';
import React, { useEffect } from 'react'
import './StreamView.css'

function StreamView() {

    const { client } = useSnippylyClient();

    useEffect(() => {
        if (client) {
            const commentElement = client.getCommentElement();
            commentElement.enableStreamMode(true);
            commentElement.allowedElementIds(['streamViewContainer']);
        }
    }, [client]);

    return (
        <div className='stream-view-container' id='streamViewContainer'>
            <div className='stream-view-docs'>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora omnis eius iusto voluptatibus mollitia in. Quae, totam porro? Sint optio, dolore voluptates inventore similique voluptate facere molestiae porro ipsam fugit aperiam. Consectetur saepe ipsam quia nisi aut nemo nostrum, quisquam voluptatibus maxime, fuga optio voluptates hic pariatur beatae ut iste corporis ipsum sed ullam esse. Autem reiciendis voluptate dolore laboriosam commodi? Nemo perspiciatis aliquid expedita nostrum, quasi praesentium hic inventore adipisci fugiat ut cum cumque. Amet, illo! Cupiditate nobis sunt facilis voluptatibus sed ipsum dolorum placeat alias! Natus totam aliquid quos quam eligendi cum, maiores quidem? A, minima? Fugit, quasi.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis repellat mollitia quaerat optio delectus impedit voluptates sit provident omnis facilis veniam quisquam suscipit repudiandae nobis, expedita similique eveniet corporis. Illo quam officia recusandae minus delectus ut. Sapiente, similique atque voluptate quis voluptas hic possimus labore perspiciatis, excepturi quidem harum!
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis veritatis aliquid expedita non earum, eum maiores quod necessitatibus quos id libero architecto placeat deserunt natus ipsum eligendi quo hic numquam excepturi sed asperiores, nulla animi! Natus ipsam expedita veritatis eveniet, ipsa fugit voluptatem nihil necessitatibus id facere accusamus accusantium temporibus quam nisi voluptates dolore animi totam. Culpa inventore tempora quas blanditiis placeat voluptatum ipsam libero, recusandae officiis fugiat suscipit.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque obcaecati quam, ratione rem ipsum exercitationem sapiente reprehenderit tempore nam molestiae necessitatibus dolor iusto recusandae nostrum quidem laboriosam. Consequuntur possimus vel inventore quasi facere, officiis laudantium sed illo! Illo recusandae unde rerum earum a.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis repellat mollitia quaerat optio delectus impedit voluptates sit provident omnis facilis veniam quisquam suscipit repudiandae nobis, expedita similique eveniet corporis. Illo quam officia recusandae minus delectus ut. Sapiente, similique atque voluptate quis voluptas hic possimus labore perspiciatis, excepturi quidem harum!
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis veritatis aliquid expedita non earum, eum maiores quod necessitatibus quos id libero architecto placeat deserunt natus ipsum eligendi quo hic numquam excepturi sed asperiores, nulla animi! Natus ipsam expedita veritatis eveniet, ipsa fugit voluptatem nihil necessitatibus id facere accusamus accusantium temporibus quam nisi voluptates dolore animi totam. Culpa inventore tempora quas blanditiis placeat voluptatum ipsam libero, recusandae officiis fugiat suscipit.
                </p>
            </div>
            <div className='stream-view-comments-container'>
                <SnippylyComments streamViewContainerId='streamViewContainer' />
            </div>
        </div>
    )
}

export default StreamView;