import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";
import './App.css'; // Importa o arquivo CSS com estilos

function App() {
  return (
    <Box h="100vh">
      <Center
        as="header"
        h={150}
        bg="teal.500"
        color="white"
        fontWeight="bold"
        fontSize="4xl"
        pb="8"
        className="piscar mudar-cor" // Adiciona as classes "piscar" e "mudar-cor" aqui
        background="#f27474"
      >
        Formulário
      </Center>
      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
        h="calc(100vh - 150px)"
      >
        <Center
          w="100%"
          maxW={840}
          bg="white"
          top={100}
          position="absolute"
          barderRadius={5}
          p="6"
          boxShadow="0 1px 2px #ccc"
        >
          <FormControl display="flex" flexDir="column" gap="4">
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmLFor="nome">Nome Completo</FormLabel>
                <Input id="nome" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="email">E-mail</FormLabel>
                <Input id="email" type="email" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nasc">Data de Nascimento</FormLabel>
                <Input id="nasc" type="date" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="idade">Idade</FormLabel>
                <Input id="idade" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="endereço">Endereço</FormLabel>
                <Input id="endereço" type="endereço" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="Telefone">Telefone</FormLabel>
                <Input id="Telefone" type="number" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="cargo">Cargo</FormLabel>
                <Input id="cargo" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="área">Área</FormLabel>
                <Input id="área" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel>Sexo</FormLabel>
                <RadioGroup defaultValue="Masculino">
                  <HStack spacing="24px">
                    <Radio value="Masculino">Masculino</Radio>
                    <Radio value="Feminino">Feminino</Radio>
                    <Radio value="Outro">Outro</Radio>
                  </HStack>
                </RadioGroup>
              </Box>
              <HStack justify="center">
                <Button
                  w={240}
                  p="6"
                  type="submit"
                  bg="teal.600"
                  color="white"
                  fontWeight="bold"
                  fontSize="xl"
                  mt="2"
                  background="#f27474"
                  _hover={{ bg: "teal.800" }}
                >
                  Enviar
                </Button>
              </HStack>
            </HStack>
          </FormControl>
        </Center>
      </Flex>
      <Box mt="4" textAlign="center">
        <span role="img" aria-label="Contato por e-mail">📧</span>
        <a href="mailto:thatylla.vrr@gmail.com">Entre em contato por e-mail</a>
        <Box mt="4" textAlign="center" style={{ fontFamily: 'Arial, sans-serif' }}>
          <Box mt="4" textAlign="center" style={{ fontFamily: 'Arial, sans-serif' }}>
            <span role="img" aria-label="Contato por telefone">☎️</span>
            <a href="tel:+5511992242798" style={{ fontFamily: 'Arial, sans-serif' }}>Entre em contato por telefone</a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App
