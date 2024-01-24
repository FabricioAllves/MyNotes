import * as ImagePicker from 'expo-image-picker';

export const handleSelectedPhotoUser =  async () => {
  try {
    let photoSelected = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
      aspect: [4, 4],
      allowsEditing: true
    });

    if (photoSelected.canceled) { return }

    const photoFile = {
      uri: photoSelected.assets[0].uri,
    } as any;

    return photoFile

  } catch (error) {                
    console.log("Erro na camera: " + error)
  }
}