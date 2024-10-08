
import { CommonActions } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParams } from '@@/App'

export const resetPage = (navigation: StackNavigationProp<RootStackParams>, page: keyof RootStackParams, params?: any) => {
    navigation.dispatch(
        CommonActions.reset({
            index: 0,
            routes:[{name: page, params: params}]
        })
    )
}

export const navigatePage = (
    navigation: StackNavigationProp<RootStackParams>, 
    page: keyof RootStackParams, 
    params?: any
     
) => {
    navigation.navigate(page, params)
}
