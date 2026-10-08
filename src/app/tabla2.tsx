import { StyleSheet, Text, View } from 'react-native';

const tarjetas = [
  {
    titulo: 'Tarjeta 1',
    descripcion: 'Descripción de la primera tarjeta.',
  },
  {
    titulo: 'Tarjeta 2',
    descripcion: 'Descripción de la segunda tarjeta.',
  },
  {
    titulo: 'Tarjeta 3',
    descripcion: 'Descripción de la tercera tarjeta.',
  },
  {
    titulo: 'Tarjeta 4',
    descripcion: 'Descripción de la cuarta tarjeta.',
  },
];

export default function Tarjetas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarjetas</Text>

      {tarjetas.map((tarjeta, index) => (
        <View style={styles.card} key={index}>
          <Text style={styles.cardTitle}>{tarjeta.titulo}</Text>

          <Text style={styles.description}>
            {tarjeta.descripcion}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    padding: 20,
    marginBottom: 15,
    borderRadius: 12,
    borderWidth: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
  },
});