import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as Actions from '../../Actions/ActionCreator'
import { StyledLi, FancyLi } from './ListItem.style'
import { WrapperDiv, LeftDiv, RightDiv } from './Div.style'


const UserList = () => {
    const userData = useSelector(store => store.users);
    const postData = useSelector(store => store.posts)
    const dispatch = useDispatch();
    useEffect(() => dispatch(Actions.fetchUsers()), [dispatch]);

    return (
        <WrapperDiv>
            <LeftDiv>
                <ul>
                    {userData.map(item =>
                        <StyledLi
                            variant={item.id}
                            key={item.id}
                            onClick={() => dispatch(Actions.fetchPosts(item.id))}
                        >
                            {item.name}
                        </StyledLi>
                    )}
                    <FancyLi variant="red">Fancy User</FancyLi>
                    <StyledLi>Extra User</StyledLi>
                </ul>
            </LeftDiv>
            <RightDiv>
                <ul>
                    {
                        postData.map(item =>
                            <StyledLi
                                variant={item.id}
                                key={item.id}
                            >
                                {item.title}
                            </StyledLi>
                        )
                    }
                </ul>
            </RightDiv>
        </WrapperDiv>

    )
}

export default UserList
