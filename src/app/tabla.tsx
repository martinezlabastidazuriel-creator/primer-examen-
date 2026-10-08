import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi aplicación</Text>

      <Text style={styles.subtitle}>
        Proyecto del primer parcial
      </Text>

      <Link href="/tabla" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Ver tabla</Text>
        </Pressable>
      </Link>

      <Link href="/tarjetas" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Ver tarjetas</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
  },
  button: {
    width: 220,
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: '#75c4d8',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});